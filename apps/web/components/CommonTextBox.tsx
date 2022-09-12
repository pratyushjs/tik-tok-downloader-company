import React from 'react';
import {Box, Text, Flex} from '@chakra-ui/react';
import Image from 'next/image';
const CommonTextBox = ({
    heading,
    description,
    image,
    headingFontSize,
    isReverse,
}: any) => {
    if (isReverse) {
        return (
            <Flex>
                <Box p="4">
                    <Image src={image} layout="intrinsic" />
                </Box>
                <Box p="4">
                    <Text
                        fontSize={headingFontSize || '48px'}
                        fontWeight={'700'}
                    >
                        {heading}
                    </Text>
                    <Text fontSize={'20px'} fontWeight={'400'}>
                        {description}
                    </Text>
                </Box>
            </Flex>
        );
    }
    return (
        <Flex>
            <Box p="4">
                <Text fontSize={headingFontSize || '48px'} fontWeight={'700'}>
                    {heading}
                </Text>
                <Text fontSize={'20px'} fontWeight={'400'}>
                    {description}
                </Text>
            </Box>
            <Box p="4">
                <Image src={image} layout="intrinsic" />
            </Box>
        </Flex>
    );
};

export default CommonTextBox;
