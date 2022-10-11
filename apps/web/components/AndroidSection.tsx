import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { fixedStrings } from '../static/fixedString';

const AndroidSection = () => {
    return <Flex direction={'column'} p={'6%'} bg="white">
        <Box textAlign={'center'}
            color={'##000000'}
            fontWeight="700"
            fontSize={['24px', '48px']}
            mb={['30px','30px','95px']}
        >Download TikTok videos on Android phones</Box>
        <Flex direction={['column','column','row']} justifyContent='center' alignContent={'center'}>
            {fixedStrings.androidSections.map((android,i) => (
                <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} mb={'25px'}>
                    <Flex
                        alignItems={'center'}
                        bg={'rgba(255, 0, 80, 0.2)'}
                        textAlign="center"
                        borderRadius={'50%'}
                        w={['24px', '40px']}
                        h={['24px', '40px']}
                        mr={['2%']}
                        justifyContent={'center'}
                        mb={['20px', '20px', '60px']}
                    >
                        {i+1}
                    </Flex>
                    <Flex mb={'25px'}>
                        <Image
                            src={android.imageSrc}
                            layout={'intrinsic'}
                            height="30%"
                            width={'30%'}
                        />
                    </Flex>
                    <Box textAlign={'center'}
                        color={'#555555'}
                        fontWeight="400"
                        fontSize={['14px', '18px']}
                        pl={['20px', '20px', 0]}
                    >
                            {android.text}
                    </Box>
                </Flex>
            ))}
        </Flex>
    </Flex>;
};

export default AndroidSection;
