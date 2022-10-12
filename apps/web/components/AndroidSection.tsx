import {Box, Flex} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import {useTranslations} from 'next-intl';
const AndroidSection = () => {
    const t = useTranslations('androidSection');
    const sections = t.raw('links');
    console.log(sections);

    return (
        <Flex direction={'column'} p={'6%'} bg="white">
            <Box
                textAlign={'center'}
                color={'##000000'}
                fontWeight="700"
                fontSize={['24px', '48px']}
                mb={['30px', '30px', '95px']}
            >
                {t('download')}
            </Box>
            <Flex
                direction={['column', 'column', 'row']}
                justifyContent="center"
                alignContent={'center'}
                className="test_line"
                position={'relative'}
                zIndex={'0'}
            >
                {sections.map((android: any, i: number) => (
                    <Flex
                        direction={'column'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        flex="0 0 25%"
                        p={['', '', '0 20px 20px 25px']}
                        key={`${i}android`}
                    >
                        <Flex>
                            <Flex
                                alignItems={'center'}
                                bg={'#ffccdc'}
                                textAlign="center"
                                borderRadius={'50%'}
                                w={['24px', '40px']}
                                h={['24px', '40px']}
                                mr={['2%']}
                                justifyContent={'center'}
                                mb={['20px', '20px', '60px']}
                            >
                                {i + 1}
                            </Flex>
                        </Flex>
                        <Flex mb={'25px'}>
                            <Image
                                src={android.imageSrc}
                                layout={'intrinsic'}
                                height="30%"
                                width={'30%'}
                            />
                        </Flex>
                        <Box
                            textAlign={'center'}
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
        </Flex>
    );
};

export default AndroidSection;
