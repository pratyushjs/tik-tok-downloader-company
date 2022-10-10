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
            p={'0 50px'}
        >
            <Flex justifyContent={'center'} marginBottom={['16px', '24px']}>
                <Image
                    src={imageSrc}
                    layout={'intrinsic'}
                    height="60%"
                    width={'60%'}
                />
            </Flex>
            <Box textAlign={'center'}>{text}</Box>
        </Flex>
    );
};

export default KeysImagesTextModule;
