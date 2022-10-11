import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { fixedStrings } from '../static/fixedString';

const IOSSection = () => {
    return <Flex bg={'#F9F9F9'} p={'6%'} direction={['column','column','row']}>
        <Flex direction={'column'} p={'0 6% 0 0 '}>
            <Box textAlign={'left'}
                color={'#333B4F'}
                fontWeight="700"
                fontSize={['24px', '48px']}
            mb={['16px','16px','47px']}
            >TikTok videos download
                for iPhone, iPad and
                Mac (iOS) </Box>
            <Box
                color={'#555555'}
                fontWeight="400"
                fontSize={['16px', '18px']}
                textAlign={['center','center','left']}
            >
                Download TikTok videos without watermark for free if you are an Apple user. TikTok video downloader is perfectly compatible with iOS.
                <br />
                <br />
                <br />

                You can save from TikTok in MP4 format using the Safari browser. Make sure your iOS is updated to version 13 or any newer version for smooth functioning.
            </Box>
        </Flex>
        <Flex direction={'column'}>
            {fixedStrings.iosSection.map((ios,i) => (
                <Flex direction={['column', 'row', 'row']} justifyContent={['center', 'center', 'initial']}>
                    <Flex w={'10%'} order={['2', '2', 'initial']} alignSelf={['center','center','initial']}>
                        <Image
                            src={ios.imageSrc}
                            layout={'fixed'}
                            height="30%"
                            width={'30%'}
                        />
                    </Flex>
                    <Flex textAlign={'left'}
                        color={'#555555'}
                        fontWeight="400"
                        fontSize={['14px', '18px']}
                        p={['0', '0', '0 23px 0 16px']}
                        mb={[0, 0, '100px']}
                        order={['3', '3', 'initial']}
                    >{ios.text}</Flex>
                    <Flex alignItems={'center'}
                        bg={'rgba(255, 0, 80, 0.2)'}
                        textAlign="center"
                        borderRadius={'50%'}
                        w={['24px', '40px']}
                        h={['24px', '40px']}
                        mr={['2%']}
                        justifyContent={'center'}
                        mb={['0', '0', '60px']}
                        alignSelf={['center', 'center', 'baseline']}
                    order={['1','1','initial']}
                    >{i + 1}</Flex>
                </Flex>
            ))}
        </Flex>
    </Flex>;
};

export default IOSSection;
