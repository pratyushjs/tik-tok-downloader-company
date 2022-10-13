import {Box, Flex} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import {useTranslations} from 'next-intl';
const PcSection = () => {
    const t = useTranslations('pcSection');
    const points = t.raw('points');
    return (
        <Flex
            direction={'column'}
            p={'6%'}
            bg="white"
            pt={'10%'}
            alignItems={['initial', 'initial', 'center']}
        >
            <Box
                textAlign={'center'}
                color={'#000000'}
                fontWeight="700"
                fontSize={['24px', '48px']}
                mb={['20px', '30px', '20px']}
            >
                {t('heading')}
            </Box>
            <Box
                color={'#555555'}
                fontWeight="400"
                fontSize={['14px', '18px']}
                textAlign={'center'}
                mb={['20px', '30px', '20px']}
                w={['initial', 'initial', '1000px']}
            >
                {t('subText')}
            </Box>
            <Box
                textAlign={'center'}
                fontSize={['16px', '18px']}
                fontWeight={'600'}
                mb={['20px', '30px', '95px']}
            >
                All you need to do is -
            </Box>
            <Flex
                direction={['column', 'column', 'row']}
                justifyContent="center"
                alignContent={'center'}
                pos={'relative'}
                className="step-line-pc"
                zIndex={'0'}
            >
                {points.map((android: any, i: number) => (
                    <Flex
                        direction={'column'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                        mb={'25px'}
                        flex="0 0 33.33%"
                        key={`${i}pcSection`}
                    >
                        <Flex
                            alignItems={'center'}
                            bg={'#ffccdc'}
                            textAlign="center"
                            borderRadius={'50%'}
                            w={['24px', '40px']}
                            h={['24px', '40px']}
                            justifyContent={'center'}
                            mb={['20px', '20px', '60px']}
                            alignSelf={['center', 'center', 'center']}
                        >
                            {i + 1}
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
                            pl={['0px', '20px', 0]}
                            width={['initial', 'initial', '350px']}
                            mr={['initial', 'initial', '25px']}
                        >
                            {android.text}
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default PcSection;
