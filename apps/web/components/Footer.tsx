import {Box, Center, Text, Stack} from '@chakra-ui/react';
import React from 'react';

export const Footer = () => (
    <Center p={['7%']} w={'full'} bg={'#65D2E9'}>
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
                <Box className="Footer__PolicyTabs" fontSize={'inherit'}>
                    Contacts
                </Box>
                <Box className="Footer__PolicyTabs" fontSize={'inherit'}>
                    Privacy Policy
                </Box>
                <Box className="Footer__PolicyTabs" fontSize={'inherit'}>
                    FAQs
                </Box>
                <Box className="Footer__PolicyTabs" fontSize={'inherit'}>
                    APK
                </Box>
            </Stack>
            <Text align={['initial', 'center']}>
                We are not affiliated with TikTok, Douyin or Bytedance
            </Text>
            <Text align={['initial', 'center']}>Copyright 2018-2022</Text>
        </Stack>
    </Center>
);
