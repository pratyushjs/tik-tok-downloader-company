import {Box, Center, Text, Stack} from '@chakra-ui/react';
import React from 'react';
import {useTranslations} from 'next-intl';
export const Footer = () => {
    const t = useTranslations('footerData');
    const points = t.raw('points');
    return (
        <Center
            p={['7%']}
            w={'full'}
            bgGradient="linear(292.45deg, #7F197C 0%, #3B3B9A 98.67%)"
        >
            <Stack
                className="Footer"
                spacing={4}
                align="stretch"
                direction={'column'}
            >
                <Stack
                    spacing={['10px', '60px']}
                    direction={['column', 'column', 'row']}
                    fontSize={['16px', '16px', '24px']}
                >
                    {points.map(
                        (point: {
                            text:
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
                                | undefined;
                        }) => (
                            <Box
                                className="Footer__PolicyTabs"
                                fontSize={'inherit'}
                                color={'#FFFFFF'}
                            >
                                {point.text}
                            </Box>
                        ),
                    )}
                </Stack>
                <Text align={['initial', 'center']} color={'#FFFFFF'}>
                    {t('text')}
                </Text>
                <Text align={['initial', 'center']} color={'#FFFFFF'}>
                    {t('subText')}
                </Text>
            </Stack>
        </Center>
    );
};
