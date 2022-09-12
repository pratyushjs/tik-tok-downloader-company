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
            <Flex direction={['column', 'row']}>
                <Box p="4">
                    <Image src={image} layout="intrinsic" />
                </Box>
                <Box p="4">
                    <Text
                        fontSize={['24px', '24px', headingFontSize || '48px']}
                        fontWeight={'700'}
                        textAlign={['center', 'initial']}
                    >
                        {heading}
                    </Text>
                    <Text
                        fontSize={['16px', '16px', '20px']}
                        fontWeight={'400'}
                        textAlign={['center', 'initial']}
                    >
                        {description}
                    </Text>
                </Box>
            </Flex>
        );
    }
    return (
        <Flex direction={['column-reverse', 'row']}>
            <Box p="4">
                <Text
                    fontSize={['24px', '24px', headingFontSize || '48px']}
                    fontWeight={'700'}
                    textAlign={['center', 'initial']}
                >
                    {heading}
                </Text>
                <Text
                    fontSize={['16px', '16px', '20px']}
                    fontWeight={'400'}
                    textAlign={['center', 'initial']}
                >
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
