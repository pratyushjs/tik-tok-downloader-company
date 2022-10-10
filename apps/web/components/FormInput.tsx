import {
    InputGroup,
    Input,
    InputRightElement,
    Button,
    Flex,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import React, {useRef, useState} from 'react';
import {ExtractedInfo} from 'tiktok-dl-core';
import {getTikTokURL} from '../lib/url';
import {VideoComponent} from './Video';
import CC from '../static/images/cc.png';
import axios from 'axios';
import Image from 'next/image';

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

// const fetcher: Fetcher<ExtractedInfoWithProvider, string> = (...args) =>
//     fetch(...args).then((r) => r.json());

export const FormInputComponent = (props: any): JSX.Element => {
    const inputFieldRef = useRef<any>(null);
    const [state, setState] = useState<any>({
        error: false,
        url: '',
        isLoading: false,
        isCalledApi: false,
    });
    const [recievedData, setRecievedData] = useState<any>({});
    const isButtonDisabled = () => {
        console.log(state);

        if (state.isCalledApi) return true;
        if (state.isLoading) return true;
        if (state?.error == false || state?.error) return true;
        return false;
    };
    // const {data, mutate} = useSWR(
    //     (!state.error || !(state.error as string).length) &&
    //         /^http(s?)(:\/\/)([a-z]+\.)*tiktok\.com\/(.+)$/gi.test(state.url)
    //         ? [
    //               '/api/download',
    //               {
    //                   method: 'POST',
    //                   body: JSON.stringify({url: state.url}),
    //               },
    //           ]
    //         : null,
    //     fetcher,
    //     {
    //         loadingTimeout: 5_000,
    //         refreshInterval: 60_000,
    //         revalidateOnMount: false,
    //         onSuccess: () => {
    //             setState({
    //                 ...state,
    //                 submitted: false,
    //             });
    //             props.seturlProgressType('');
    //         },
    //     },
    // );
    // React.useEffect(() => {
    //     console.log(data);
    //     if (data) {
    //         const link = document.createElement('a');
    //         console.log(data?.video?.urls[0]);
    //         const a = data?.video?.urls[0];
    //         if (a) {
    //             link.href = a;
    //             document.body.appendChild(link);
    //             link.click();
    //             document.body.removeChild(link);
    //         }
    //     }
    // }, [data]);
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
        }
    }, [state.submitted, state.url]);
    const makeApiCall = async (url: string) => {
        try {
            const response = await axios.post(
                '/api/download',
                {url: url},
                {
                    timeout: 30_000,
                },
            );
            console.log(response);
            if (response.status == 200) {
                props.seturlProgressType('SUCCESS');
                setRecievedData(response.data);
                setState({
                    ...state,
                    isCalledApi: true,
                    isLoading: false,
                });
            } else if (response.status == 400) {
                setState({
                    ...state,
                    isCalledApi: true,
                    error: true,
                    isLoading: false,
                });
                props.seturlProgressType('FAILED');
            }
        } catch (error) {
            setState({
                ...state,
                isCalledApi: true,
                error: true,
                isLoading: false,
            });
            props.seturlProgressType('FAILED');
        }
    };
    const handlePaste = () => {
        navigator.clipboard.readText().then((text) => {
            // inputFieldRef.current.value = text;
            setState({
                ...state,
                url: text,
            });
        });
    };
    const handleClick = (event: any) => {
        console.log('click');
        setState({
            ...state,
            isLoading: true,
        });
        props.seturlProgressType('DOWNLOADING');
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
        makeApiCall(state.url);
    };
    const downloadLink = (url: any) => {
        const link = document.createElement('a');
        if (url) {
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    return (
        <React.Fragment>
            <section className="flex flex-col justify-center">
                <section className="mt-3 mb-3 text-center flex justify-center">
                    {recievedData?.video?.urls?.length && (
                        <VideoComponent data={recievedData} />
                    )}
                </section>
                <Flex justifyContent={'center'}>
                    <InputGroup
                        size="md"
                        bg="white"
                        borderRadius={'100px'}
                        h={['60px', '84px']}
                        width={['full', '80%', '70%']}
                    >
                        <Input
                            pr="4.5rem"
                            h={['60px', '84px']}
                            placeholder="Paste tiktok URL here…"
                            value={state.url}
                            type="url"
                            w={['98%', '98%', '74%']}
                            borderRadius={'100px'}
                            p={'28px 28px'}
                            border="none"
                            fontSize={'20px'}
                            fontWeight={'400px'}
                            focusBorderColor="none"
                            ref={inputFieldRef}
                            onChange={(event) =>
                                setState({
                                    ...state,
                                    url: event.target.value,
                                })
                            }
                        />
                        <Flex
                            alignItems={'center'}
                            cursor="pointer"
                            onClick={handlePaste}
                            mr={'6px'}
                        >
                            <Image src={CC} layout={'intrinsic'} />
                        </Flex>
                        <InputRightElement
                            justifyContent={'center'}
                            p={'10px 10px 28px 0'}
                            w="initial"
                            display={['none', 'none', 'initial']}
                            alignItems={'center'}
                        >
                            <Button
                                h="auto"
                                size="sm"
                                width={'full'}
                                onClick={(e) => handleClick(e)}
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
                                isDisabled={isButtonDisabled()}
                                isActive={false}
                            >
                                Download
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
                            h={['60px', '84px']}
                            size="sm"
                            width={'full'}
                            onClick={(e) => handleClick(e)}
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
                            disabled={isButtonDisabled()}
                        >
                            Download
                        </Button>
                    </Flex>
                </Flex>
                <p className="text-black-400 font-sans font-semibold py-2 text-center">
                    {state.error instanceof Error
                        ? state.error.name.concat(
                              ': '.concat(state.error.message),
                          )
                        : state.error
                        ? state.error
                        : ''}
                </p>
                <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                    {recievedData?.video?.urls.map(
                        (url: any, index: number) => (
                            <GridItem>
                                <Button
                                    onClick={() => downloadLink(url)}
                                    w={'full'}
                                    bg={'#2A2A2A'}
                                    color={'white'}
                                >
                                    LINK {index + 1}
                                </Button>
                            </GridItem>
                        ),
                    )}
                </Grid>
            </section>
        </React.Fragment>
    );
};

export default FormInputComponent;
