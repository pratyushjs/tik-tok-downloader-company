import {Flex, Box} from '@chakra-ui/react';
import React from 'react';
import ThreeStepsImageTextModule from './Atoms/ThreeStepsImageTextModule';
import {useTranslations} from 'next-intl';
const ThreeEasySteps = () => {
    const t = useTranslations('threeEasySteps');
    const points = t.raw('points');
    return (
        <Flex direction={'column'} p={['10% 5%', '10% 5%']}>
            <Flex direction={'column'} pb={['5%', '4%']}>
                <Box
                    textAlign={'center'}
                    color={'#333B4F'}
                    fontWeight={'700'}
                    fontSize={['24px', '48px']}
                    lineHeight={['32px']}
                    marginBottom={['10px', '20px']}
                >
                    {t('heading')}
                </Box>
                <Box
                    color={'#555555'}
                    fontWeight="400"
                    fontSize={['16px', '20px']}
                    textAlign={'center'}
                    lineHeight={['24px']}
                    letterSpacing={['initial', '-0.303241px']}
                >
                    {t('subText')}
                </Box>
            </Flex>
            <Flex direction={['column', 'column', 'row']}>
                {points.map(
                    (
                        step: {image: any; heading: any; description: any},
                        i: number,
                    ) => (
                        <ThreeStepsImageTextModule
                            imageSrc={step.image}
                            index={i + 1}
                            heading={step.heading}
                            text={step.description}
                            key={`${i}threeEasysteps`}
                        />
                    ),
                )}
            </Flex>
        </Flex>
    );
};

export default ThreeEasySteps;
