import {Box, Flex} from '@chakra-ui/react';
import React from 'react';
import KeysImagesTextModule from './Atoms/KeysImagesTextModule';
import {useTranslations} from 'next-intl';
const KeySteps = () => {
    const t = useTranslations('keyFeatures');
    const points = t.raw('points');
    return (
        <Flex bg={'#F3F8FB'} p={['5%']} direction={'column'} pb={'2%'}>
            <Box
                textAlign={'center'}
                fontWeight="700"
                fontSize={['24px', '48px']}
                color={'#000000'}
                mb={['30px', '50px']}
            >
                {t('heading')}
            </Box>
            <Flex
                justifyContent={'center'}
                flexDirection={['column', 'column', 'row']}
                flexWrap={'wrap'}
            >
                {points.map((feature: {imageSrc: any; text: any}, i: any) => (
                    <KeysImagesTextModule
                        imageSrc={feature.imageSrc}
                        text={feature.text}
                        key={`${i}keyfeatures`}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default KeySteps;
