import {Box, Center, HStack, Text, VStack} from '@chakra-ui/react';
import React from 'react';

export const Footer = () => (
    <Center p={'57'} w={'full'} bg={'#65D2E9'}>
        <VStack className="Footer" spacing={4} align="stretch">
            <HStack spacing="60px">
                <Box className="Footer__PolicyTabs">Contacts</Box>
                <Box className="Footer__PolicyTabs">Privacy Policy</Box>
                <Box className="Footer__PolicyTabs">FAQs</Box>
                <Box className="Footer__PolicyTabs">APK</Box>
            </HStack>
            <Text align={'center'}>
                We are not affiliated with TikTok, Douyin or Bytedance
            </Text>
            <Text align={'center'}>Copyright 2018-2022</Text>
        </VStack>
    </Center>
);
