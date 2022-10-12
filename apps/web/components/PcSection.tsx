import {Box, Flex} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import {fixedStrings} from '../static/fixedString';

const PcSection = () => {
    return (
        <Flex direction={'column'} p={'6%'} bg="white">
            <Box
                textAlign={'center'}
                color={'##000000'}
                fontWeight="700"
                fontSize={['24px', '48px']}
                mb={['30px', '30px', '95px']}
            >
                TikTok Video Downloader Without Watermark for PC
            </Box>
            <Box
                color={'#555555'}
                fontWeight="400"
                fontSize={['14px', '18px']}
                textAlign={'center'}
            >
                This is the most convenient and universal way to download and
                save your files in MP4 format. You can download TikTok videos
                without watermark in high quality in one go. Our TikTok video
                downloader works perfectly on Mac OS, Windows & Linux platforms.
                If you are using your PC to save from TikTok, you do not need to
                install any additional applications
            </Box>
            <Box textAlign={'center'}>All you need to do is -</Box>
            <Flex
                direction={['column', 'column', 'row']}
                justifyContent="center"
                alignContent={'center'}
                pos={'relative'}
                className="step-line-pc"
                zIndex={'0'}
            >
                {fixedStrings.pcSection.map((android, i) => (
                    <Flex
                        direction={'column'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        mb={'25px'}
                        flex="0 0 33.33%"
                        key={`${i}pcSection`}
                    >
                        <Flex
                            alignItems={'center'}
                            bg={'#ffccdc'}
                            textAlign="center"
                            borderRadius={'50%'}
                            w={['24px', '40px']}
                            h={['24px', '40px']}
                            mr={['2%']}
                            justifyContent={'center'}
                            mb={['20px', '20px', '60px']}
                            alignSelf={['center', 'center', 'center']}
                        >
                            {i + 1}
                        </Flex>
                        <Flex mb={'25px'}>
                            <Image
                                src={android.imageSrc}
                                layout={'intrinsic'}
                                height="30%"
                                width={'30%'}
                            />
                        </Flex>
                        <Box
                            textAlign={'center'}
                            color={'#555555'}
                            fontWeight="400"
                            fontSize={['14px', '18px']}
                            pl={['20px', '20px', 0]}
                        >
                            {android.text}
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default PcSection;
