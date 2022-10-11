import {Flex, Text} from '@chakra-ui/react';
import React from 'react';
import {Spinner} from '@chakra-ui/react';

const InputHeaderText = (props: any) => {
    console.log(props);
    const {urlProgressType: type} = props;
    if (type == 'SUCCESS')
        return (
            <>
                <Text
                    fontWeight={[400, 800]}
                    fontSize={['36px', '60px']}
                    color={'white'}
                    p={['44% 0 3% 0', '17% 0 3% 0']}
                    textAlign={'center'}
                >
                    Your video has downloaded!
                </Text>
            </>
        );
    if (type == 'DOWNLOADING')
        return (
            <>
                <Text
                    fontWeight={[400, 800]}
                    fontSize={['36px', '60px']}
                    color={'white'}
                    p={'3% 0'}
                    textAlign={'center'}
                >
                    Your video is downloading
                </Text>
                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    p={'5% 0%'}
                >
                    <Spinner thickness="4px" speed="0.65s" size="xl" />
                </Flex>
            </>
        );
    if (type == 'FAILED')
        return (
            <>
                <Text
                    fontWeight={[400, 800]}
                    fontSize={['36px', '60px']}
                    color={'white'}
                    textAlign={'center'}
                    p={'3% 0'}
                >
                    Downloading failed
                </Text>
            </>
        );
    return (
        <>
            <Text
                fontWeight={[400, 800]}
                fontSize={['36px', '60px']}
                color={'white'}
                textAlign={'center'}
            >
                Download TikTok Video
            </Text>
            <Text className="InputFiledHeaderText__slim">
                TikTok video downloader. Download TikTok video without watermark
            </Text>
        </>
    );
};

export default InputHeaderText;
