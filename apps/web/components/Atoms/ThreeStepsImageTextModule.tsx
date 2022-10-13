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
            position={'relative'}
        >
            <Flex
                textAlign={'center'}
                justifyContent={'center'}
                pb={'2%'}
                minH={['96px', '96px', '256px']}
                minW={['96px', '96px', '256px']}
                mb={['16px', '16px', '28px']}
                position={'relative'}
            >
                <Image src={imageSrc} layout={'fill'} />
            </Flex>
            <Flex direction={'column'} position={'relative'}>
                <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Flex
                        alignItems={'center'}
                        bg={'#ffccdc'}
                        textAlign="center"
                        borderRadius={'50%'}
                        w={['24px', '40px']}
                        h={['24px', '40px']}
                        mr={['2%']}
                        justifyContent={'center'}
                        color={'#000000'}
                        fontWeight={'700'}
                        fontSize={['12px', '18px']}
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
                    lineHeight={['21px', '27px']}
                >
                    {text}
                </Box>
            </Flex>
        </Flex>
    );
};

export default ThreeStepsImageTextModule;
