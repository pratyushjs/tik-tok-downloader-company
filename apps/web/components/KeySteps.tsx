import {Box, Flex} from '@chakra-ui/react';
import React from 'react';
import {fixedStrings} from '../static/fixedString';
import KeysImagesTextModule from './Atoms/KeysImagesTextModule';

const KeySteps = () => {
    return (
        <Flex bg={'#F3F8FB'} p={['5%']} direction={'column'} pb={'2%'}>
            <Box
                textAlign={'center'}
                fontWeight="700"
                fontSize={['24px', '48px']}
                color={'#000000'}
                mb={['30px', '50px']}
            >
                Key Features of Tiktokgo.net Video Downloader
            </Box>
            <Flex
                justifyContent={'center'}
                flexDirection={['column', 'column', 'row']}
                flexWrap={'wrap'}
            >
                {fixedStrings.keyFeatures.map((feature) => (
                    <KeysImagesTextModule
                        imageSrc={feature.imageSrc}
                        text={feature.text}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default KeySteps;
