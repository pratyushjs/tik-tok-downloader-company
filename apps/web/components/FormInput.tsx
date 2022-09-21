import {
    InputGroup,
    Input,
    InputRightElement,
    Button,
    Flex,
} from '@chakra-ui/react';
import React from 'react';
import useSWR, {Fetcher} from 'swr';
import {ExtractedInfo} from 'tiktok-dl-core';
import {getTikTokURL} from '../lib/url';
import {VideoComponent} from './Video';

// // ERRORS ///
/**
 * @class InvalidUrlError
 */
class InvalidUrlError extends Error {
    /**
     * @param {string} msg error message.
     */
    constructor(msg?: string) {
        super(msg);
        this.name = 'INVALID_URL';
    }
}

export type ExtractedInfoWithProvider = ExtractedInfo & {
    provider: string;
    _url: string;
};

interface StateData {
    submitted: boolean;
    error?: string | Error | boolean;
    url: string;
}

const fetcher: Fetcher<ExtractedInfoWithProvider, string> = (...args) =>
    fetch(...args).then((r) => r.json());

export const FormInputComponent = (props:any): JSX.Element => {
    const [state, setState] = React.useState<StateData>({
        submitted: false,
        error: false,
        url: '',
    });
    const {data, mutate} = useSWR(
        (!state.error || !(state.error as string).length) &&
            /^http(s?)(:\/\/)([a-z]+\.)*tiktok\.com\/(.+)$/gi.test(state.url)
            ? [
                  '/api/download',
                  {
                      method: 'POST',
                      body: JSON.stringify({url: state.url}),
                  },
              ]
            : null,
        fetcher,
        {
            loadingTimeout: 5_000,
            refreshInterval: 60_000,
            revalidateOnMount: false,
            onSuccess: () =>
                setState({
                    ...state,
                    submitted: false,
                }),
        },
    );
    React.useEffect(() => {
        console.log(data);
        if (data) {
            const link = document.createElement('a');
            console.log(data?.video?.urls[0]);
            const a = data?.video?.urls[0];
            if (a) {
                link.href = a;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }, [data]);
    React.useEffect(() => {
        if (!state.url) return;
        if (
            !/^http(s?)(:\/\/)([a-z]+\.)*tiktok\.com\/(.+)$/gi.test(
                state.url,
            ) &&
            state.url.length
        ) {
            setState({
                ...state,
                error: new InvalidUrlError('Invalid TikTok URL'),
            });
        } else {
            console.log('this is ok');

            setState({
                ...state,
                error: undefined,
            });
            // submit event trigger.
            if (state.submitted && !state.error) {
                mutate();
            }

            try {
                const u = getTikTokURL(state.url);
                if (!u) {
                    setState({
                        ...state,
                        error: new InvalidUrlError('Invalid TikTok URL'),
                    });
                    return;
                }

                setState({
                    ...state,
                    url: u,
                });
            } catch {
                setState({
                    ...state,
                    error: new InvalidUrlError('Invalid TikTok URL'),
                });
            }

            setState({
                ...state,
                error: undefined,
            });
        }
    }, [state.submitted, state.url]);
    const handleClick = (event: any) => {
        if (!state.url.length) {
            setState({
                ...state,
                error: 'Please fill the URL!',
            });
            return;
        }
        !state.error &&
            setState({
                ...state,
                submitted: true,
            });
    };
    return (
        <React.Fragment>
            <section className="flex flex-col">
                <div>
                    <InputGroup size="md" bg="white" borderRadius={'100px'}>
                        <Input
                            pr="4.5rem"
                            placeholder="Paste tiktok URL here…"
                            value={state.url}
                            type="url"
                            w={['98%', '98%', '74%']}
                            borderRadius={'100px'}
                            p={'28px 28px'}
                            border="none"
                            focusBorderColor="none"
                            onChange={(event) =>
                                setState({
                                    ...state,
                                    url: event.target.value,
                                })
                            }
                        />
                        <InputRightElement
                            justifyContent={'center'}
                            p={'10px 10px 28px 0'}
                            w="initial"
                            display={['none', 'none', 'initial']}
                        >
                            <Button
                                h="1.75rem"
                                size="sm"
                                onClick={() => handleClick}
                                borderRadius={'60px'}
                                bg={
                                    state?.error == false || state?.error
                                        ? '#69C9D0'
                                        : '#E81D50'
                                }
                                color="white"
                                fontSize={'20px'}
                                fontWeight={'500'}
                                p="19px"
                                disabled={
                                    state?.error == false || state?.error
                                        ? true
                                        : false
                                }
                            >
                                {state?.error == false || state?.error
                                    ? 'Paste'
                                    : 'Download'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Flex
                        p={'28px 10px 28px 0'}
                        w="initial"
                        display={['flex', 'flex', 'none']}
                        justifyContent="center"
                    >
                        <Button
                            h="1.75rem"
                            size="sm"
                            width={'full'}
                            onClick={() => handleClick}
                            borderRadius={'60px'}
                            bg={
                                state?.error == false || state?.error
                                    ? '#e6436d'
                                    : '#E81D50'
                            }
                            color="white"
                            fontSize={'20px'}
                            fontWeight={'500'}
                            p="19px"
                            disabled={
                                state?.error == false || state?.error
                                    ? true
                                    : false
                            }
                        >
                            {state?.error == false || state?.error
                                ? 'Paste'
                                : 'Download'}
                        </Button>
                    </Flex>
                </div>
                <p className="text-black-400 font-sans font-semibold py-2 text-center">
                    {state.error instanceof Error
                        ? state.error.name.concat(
                              ': '.concat(state.error.message),
                          )
                        : state.error
                        ? state.error
                        : ''}
                </p>
                <section className="mt-3 mb-3 text-center flex justify-center">
                    {state.submitted && !data && (
                        <p className={'text-base font-sans text-black-500'}>
                            Wait a minute
                        </p>
                    )}
                    {data && data.video && data.video.urls.length && (
                        <VideoComponent data={data} />
                    )}
                </section>
            </section>
        </React.Fragment>
    );
};

export default FormInputComponent;
