import {Box, Flex} from '@chakra-ui/react';
import React from 'react';
import {fixedStrings} from '../static/fixedString';

const BestPlace = () => {
    return (
        <Flex bg={'#F3F8FB'} p="10% 10%" flexDirection={'column'}>
            <Box
                color={'#000000'}
                fontSize={['24px', '48px']}
                fontWeight={'700'}
                textAlign={'center'}
                mb={['25px', '45px']}
            >
                Why TikTokgo.net is the best place to download TikTok videos
                without watermark.
            </Box>
            <Flex
                bg="rgba(184, 233, 245, 0.6)"
                borderRadius={'20px'}
                p={'5%'}
                direction={'column'}
            >
                <Box
                    fontSize={['16px', '28px']}
                    fontWeight={'700'}
                    color={'#333B4F'}
                    pb={'20px'}
                >
                    Tiktok video download has never been easier. Wondering how
                    you can save and download your favourite TikTok videos?
                </Box>
                <Flex direction={'column'}>
                    {fixedStrings.bestPoints.map((point, i) => (
                        <Flex direction={'row'} pb={['24px', '40px']}>
                            <Flex
                                color={'#79BDCC'}
                                fontSize={['24px', '60px']}
                                fontWeight={['700', '900']}
                            >
                                {i + 1}.
                            </Flex>
                            <Box
                                fontSize={['14px', '18px']}
                                fontWeight={'400'}
                                color={'#333B4F'}
                                ml={'4%'}
                            >
                                {point}
                            </Box>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default BestPlace;
