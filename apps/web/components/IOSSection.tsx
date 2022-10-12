import {Box, Flex} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import {useTranslations} from 'next-intl';
const IOSSection = () => {
    const t = useTranslations('iosSection');
    const points = t.raw('points');
    return (
        <Flex bg={'#F9F9F9'} p={'6%'} direction={['column', 'column', 'row']}>
            <Flex direction={'column'} p={'0 6% 0 0 '}>
                <Box
                    textAlign={'left'}
                    color={'#333B4F'}
                    fontWeight="700"
                    fontSize={['24px', '48px']}
                    mb={['16px', '16px', '47px']}
                >
                    {t('heading')}{' '}
                </Box>
                <Box
                    color={'#555555'}
                    fontWeight="400"
                    fontSize={['16px', '18px']}
                    textAlign={['center', 'center', 'left']}
                >
                    {t('subText')}
                    <br />
                    <br />
                    <br />
                    {t('anothersubText')}
                </Box>
            </Flex>
            <Flex
                direction={'column'}
                pos={'relative'}
                zIndex={'1'}
                className="step_ios"
            >
                {points.map((ios: any, i: number) => (
                    <Flex
                        direction={['column', 'row', 'row']}
                        justifyContent={['center', 'center', 'initial']}
                        key={`${i}isoSection`}
                    >
                        <Flex
                            w={'10%'}
                            order={['2', '2', 'initial']}
                            alignSelf={['center', 'center', 'initial']}
                        >
                            <Image
                                src={ios.imageSrc}
                                layout={'fixed'}
                                height="30%"
                                width={'30%'}
                            />
                        </Flex>
                        <Flex
                            textAlign={'left'}
                            color={'#555555'}
                            fontWeight="400"
                            fontSize={['14px', '18px']}
                            p={['0', '0', '0 23px 0 16px']}
                            mb={[0, 0, '100px']}
                            order={['3', '3', 'initial']}
                        >
                            {ios.text}
                        </Flex>
                        <Flex
                            alignItems={'center'}
                            bg={'#ffccdc'}
                            textAlign="center"
                            borderRadius={'50%'}
                            w={['24px', '40px']}
                            h={['24px', '40px']}
                            mr={['2%']}
                            justifyContent={'center'}
                            mb={['0', '0', '60px']}
                            alignSelf={['center', 'center', 'baseline']}
                            order={['1', '1', 'initial']}
                        >
                            {i + 1}
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default IOSSection;
