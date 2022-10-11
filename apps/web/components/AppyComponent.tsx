import {Flex, Box} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import AppyHigh from '../static/images/AppyHigh.png';
const AppyComponent = () => {
    return (
        <Flex
            position={'relative'}
            p={['70px 16px', '120px 90px']}
            alignItems={'center'}
            bg={['rgba(227, 221, 251, 0.4)', '', 'white']}
            flexDirection={['column', 'column', 'row']}
        >
            <Flex
                h={['100px', '200px']}
                w={['', '700px']}
                zIndex={2}
                bg="#FFFFFF"
                boxShadow={'-9px 8px 12px rgba(0, 0, 0, 0.04)'}
                borderRadius={'20px'}
                justifyContent={'center'}
                alignItems={'center'}
                position={['absolute', 'absolute', 'initial']}
                top={['-6%', '-6%', '']}
            >
                <Image
                    src={AppyHigh}
                    layout={'intrinsic'}
                    width={'100%'}
                    height={'100%'}
                />
            </Flex>
            <Flex
                bg="rgba(227, 221, 251, 0.4)"
                borderRadius="20px"
                position={'absolute'}
                display={['none', 'none', 'block']}
                h="80%"
                w="40%"
                left={'10%'}
            ></Flex>
            <Flex direction={'column'} pl={'4%'} zIndex={2}>
                <Box
                    color={'#000000'}
                    fontSize={['24px', '48px']}
                    fontWeight={'700'}
                >
                    Download TikTok Videos Online from TikTokgo.net
                </Box>
                <Box
                    fontSize={['14px', '18px']}
                    fontWeight={'400'}
                    color={'#333B4F'}
                    textAlign={['center']}
                >
                    Tiktokgo.net is a free online TikTok video downloader tool
                    without watermark. You can save HD TikTok videos in MP4
                    format. It is very easy to download TikTok videos from our
                    website.
                    <br />
                    <br />
                    <br />
                    Tiktokgo.net is one of the most used and popular tools to
                    download no-watermark TikTok videos. You dont have to
                    install any app or software to do this, all you need is an
                    active internet connection, browser and a valid link to
                    paste in the box above on TikTok video downloader website
                    and it removes watermark from TikTok video automatically.
                </Box>
            </Flex>
        </Flex>
    );
};

export default AppyComponent;
