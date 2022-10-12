import {Box, Flex} from '@chakra-ui/react';
import React from 'react';
import {useTranslations} from 'next-intl';
const BestPlace = () => {
    const t = useTranslations('bestPlace');
    const points = t.raw('points');
    return (
        <Flex bg={'#F3F8FB'} p="10% 10%" flexDirection={'column'}>
            <Box
                color={'#000000'}
                fontSize={['24px', '48px']}
                fontWeight={'700'}
                textAlign={'center'}
                mb={['25px', '45px']}
            >
                {t('heading')}
            </Box>
            <Flex
                bg="rgba(184, 233, 245, 0.6)"
                borderRadius={'20px'}
                p={'5%'}
                direction={'column'}
            >
                <Box
                    fontSize={['16px', '28px']}
                    fontWeight={'700'}
                    color={'#333B4F'}
                    pb={'20px'}
                >
                    {t('subText')}
                </Box>
                <Flex direction={'column'}>
                    {points.map(
                        (
                            point:
                                | string
                                | number
                                | boolean
                                | React.ReactElement<
                                      any,
                                      string | React.JSXElementConstructor<any>
                                  >
                                | React.ReactFragment
                                | React.ReactPortal
                                | null
                                | undefined,
                            i: number,
                        ) => (
                            <Flex
                                direction={'row'}
                                pb={['24px', '40px']}
                                key={`${i}best`}
                            >
                                <Flex
                                    color={'#79BDCC'}
                                    fontSize={['24px', '60px']}
                                    fontWeight={['700', '900']}
                                >
                                    {i + 1}.
                                </Flex>
                                <Box
                                    fontSize={['14px', '18px']}
                                    fontWeight={'400'}
                                    color={'#333B4F'}
                                    ml={'4%'}
                                >
                                    {point}
                                </Box>
                            </Flex>
                        ),
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default BestPlace;
