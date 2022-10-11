import {Flex, Box} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const ThreeStepsImageTextModule = (props: any) => {
    const {imageSrc, index, heading, text} = props;
    return (
        <Flex direction={'column'} flex={'0 0 33.33%'}>
            <Flex textAlign={'center'} justifyContent={'center'} pb={'2%'}>
                <Image
                    src={imageSrc}
                    layout={'intrinsic'}
                    height="60%"
                    width={'60%'}
                />
            </Flex>
            <Flex direction={'column'}>
                <Flex justifyContent={'center'}>
                    <Flex
                        alignItems={'center'}
                        bg={'rgba(255, 0, 80, 0.2)'}
                        textAlign="center"
                        borderRadius={'50%'}
                        w={['24px', '40px']}
                        h={['24px', '40px']}
                        mr={['2%']}
                        justifyContent={'center'}
                    >
                        {index}
                    </Flex>
                    <Box
                        textAlign={'center'}
                        color={'#000000'}
                        fontWeight="700"
                        fontSize={['16px', '32px']}
                    >
                        {heading}
                    </Box>
                </Flex>
                <Box
                    color={'#333B4F'}
                    fontWeight="400"
                    fontSize={['14px', '18px']}
                    textAlign={'center'}
                >
                    {text}
                </Box>
            </Flex>
        </Flex>
    );
};

export default ThreeStepsImageTextModule;
