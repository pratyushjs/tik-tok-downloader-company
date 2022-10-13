import {Flex, Box} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const KeysImagesTextModule = (props: any) => {
    const {imageSrc, text} = props;
    return (
        <Flex
            direction={'column'}
            flex={'0 0 33.333333%'}
            m={'20px 0'}
            alignItems={'center'}
        >
            <Flex
                justifyContent={'center'}
                marginBottom={['16px', '24px']}
                height={['70px']}
                width={['72px']}
                position={'relative'}
            >
                <Image src={imageSrc} layout="fill" />
            </Flex>
            <Box textAlign={'center'} width={['initial', '350px']}>
                {text}
            </Box>
        </Flex>
    );
};

export default KeysImagesTextModule;
