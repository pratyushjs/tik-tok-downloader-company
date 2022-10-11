import {Flex, Box} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const ThreeStepsImageTextModule = (props: any) => {
    const {imageSrc, index, heading, text} = props;
    return (
        <Flex
            direction={'column'}
            flex={'0 0 33.33%'}
            mb={['30px', '30px', 0]}
            alignItems={'center'}
        >
            <Flex
                textAlign={'center'}
                justifyContent={'center'}
                pb={'2%'}
                h={['100px', '100px', 'initial']}
                w={['100px', '100px', 'initial']}
                mb={['16px', '16px', '28px']}
            >
                <Image
                    src={imageSrc}
                    layout={'intrinsic'}
                    height="180%"
                    width={'180%'}
                />
            </Flex>
            <Flex direction={'column'}>
                <Flex justifyContent={'center'}>
                    <Flex
                        alignItems={'center'}
                        bg={'#ffccdc'}
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
                        mb={'10px'}
                    >
                        {heading}
                    </Box>
                </Flex>
                <Box
                    color={'#333B4F'}
                    fontWeight="400"
                    fontSize={['14px', '18px']}
                    textAlign={'center'}
                    m={[0, 0, '0 18%']}
                >
                    {text}
                </Box>
            </Flex>
        </Flex>
    );
};

export default ThreeStepsImageTextModule;
