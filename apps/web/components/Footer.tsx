import {Box, Center, Text, Stack} from '@chakra-ui/react';
import React from 'react';

export const Footer = () => (
    <Center
        p={['7%']}
        w={'full'}
        bgGradient="linear(292.45deg, #7F197C 0%, #3B3B9A 98.67%)"
    >
        <Stack
            className="Footer"
            spacing={4}
            align="stretch"
            direction={'column'}
        >
            <Stack
                spacing={['10px', '60px']}
                direction={['column', 'column', 'row']}
                fontSize={['16px', '16px', '24px']}
            >
                <Box
                    className="Footer__PolicyTabs"
                    fontSize={'inherit'}
                    color={'#FFFFFF'}
                >
                    Contacts
                </Box>
                <Box
                    className="Footer__PolicyTabs"
                    fontSize={'inherit'}
                    color={'#FFFFFF'}
                >
                    Privacy Policy
                </Box>
                <Box
                    className="Footer__PolicyTabs"
                    fontSize={'inherit'}
                    color={'#FFFFFF'}
                >
                    FAQs
                </Box>
                <Box
                    className="Footer__PolicyTabs"
                    fontSize={'inherit'}
                    color={'#FFFFFF'}
                >
                    APK
                </Box>
            </Stack>
            <Text align={['initial', 'center']} color={'#FFFFFF'}>
                We are not affiliated with TikTok, Douyin or Bytedance
            </Text>
            <Text align={['initial', 'center']} color={'#FFFFFF'}>
                Copyright 2018-2022
            </Text>
        </Stack>
    </Center>
);
