import {Flex, Box} from '@chakra-ui/react';
import React from 'react';
import {fixedStrings} from '../static/fixedString';

import ThreeStepsImageTextModule from './Atoms/ThreeStepsImageTextModule';

const ThreeEasySteps = () => {
    return (
        <Flex direction={'column'} p={['5% 5%', '5% 5%']}>
            <Flex direction={'column'} pb={['5%', '4%']}>
                <Box
                    textAlign={'center'}
                    color={'#333B4F'}
                    fontWeight="700"
                    fontSize={['24px', '48px']}
                >
                    Download TikTok videos In 3 easy steps
                </Box>
                <Box
                    color={'#555555'}
                    fontWeight="400"
                    fontSize={['16px', '20px']}
                    textAlign={'center'}
                >
                    TikTok downloader allows you to download video TikToks in
                    just 3 easy steps.
                </Box>
            </Flex>
            <Flex direction={['column', 'column', 'row']}>
                {fixedStrings.ThreeEasySteps.map((step, i) => (
                    <ThreeStepsImageTextModule
                        imageSrc={step.image}
                        index={i + 1}
                        heading={step.heading}
                        text={step.description}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default ThreeEasySteps;
