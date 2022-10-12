import {Flex, Box} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import AppyHigh from '../static/images/AppyHigh.png';
import {useTranslations} from 'next-intl';
const AppyComponent = () => {
    const t = useTranslations('appySection');
    return (
        <Flex
            position={'relative'}
            p={['70px 16px', '120px 90px']}
            alignItems={'center'}
            bg={['rgba(227, 221, 251, 0.4)', '', 'white']}
            flexDirection={['column', 'column', 'row']}
        >
            <Flex
                h={['100px', '200px']}
                w={['', '700px']}
                zIndex={2}
                bg="#FFFFFF"
                boxShadow={'-9px 8px 12px rgba(0, 0, 0, 0.04)'}
                borderRadius={'20px'}
                justifyContent={'center'}
                alignItems={'center'}
                position={['absolute', 'absolute', 'initial']}
                top={['-6%', '-6%', '']}
            >
                <Image
                    src={AppyHigh}
                    layout={'intrinsic'}
                    width={'100%'}
                    height={'100%'}
                />
            </Flex>
            <Flex
                bg="rgba(227, 221, 251, 0.4)"
                borderRadius="20px"
                position={'absolute'}
                display={['none', 'none', 'block']}
                h="80%"
                w="40%"
                left={'10%'}
            ></Flex>
            <Flex direction={'column'} pl={'4%'} zIndex={2}>
                <Box
                    color={'#000000'}
                    fontSize={['24px', '48px']}
                    fontWeight={'700'}
                >
                    {t('heading')}
                </Box>
                <Box
                    fontSize={['14px', '18px']}
                    fontWeight={'400'}
                    color={'#333B4F'}
                    textAlign={['center']}
                >
                    {t('subText')}
                </Box>
            </Flex>
        </Flex>
    );
};

export default AppyComponent;
