import {Flex, Box} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
// import AppyHigh from '../static/images/AppyHigh.png';
import {useTranslations} from 'next-intl';
const AppyComponent = () => {
    const t = useTranslations('appySection');
    return (
        <Flex
            position={'relative'}
            p={['10% 5%', '120px 90px']}
            alignItems={'center'}
            bg={['rgba(227, 221, 251, 0.4)', '', 'white']}
            flexDirection={['column', 'column', 'row']}
        >
            <Flex
                minH={['159px', '320px']}
                minW={['159px', '320px']}
                zIndex={2}
                bg="#FFFFFF"
                boxShadow={'-9px 8px 12px rgba(0, 0, 0, 0.04)'}
                borderRadius={'20px'}
                justifyContent={'center'}
                alignItems={'center'}
                position={['absolute', 'absolute', 'initial']}
                top={['-79.5px']}
            >
                <Flex
                    minH={['126.5px', '254px']}
                    minW={['95px', '192px']}
                    position={['absolute', 'absolute', 'absolute']}
                >
                    <Image
                        src={
                            'https://s3.ap-southeast-1.wasabisys.com/tiktok-qa/AppyHigh.png'
                        }
                        layout={'fill'}
                    />
                </Flex>
            </Flex>
            <Flex
                bg="rgba(227, 221, 251, 0.4)"
                borderRadius="20px"
                position={'absolute'}
                display={['none', 'none', 'block']}
                h="80%"
                w="40%"
                left={['10%', '220px']}
            ></Flex>
            <Flex
                direction={'column'}
                zIndex={2}
                width={['100%', '60%']}
                ml={['initial', '10%']}
            >
                <Box
                    color={'#000000'}
                    fontSize={['24px', '48px']}
                    fontWeight={'700'}
                    textAlign={['center', 'left']}
                    m={['70px 0px 20px 0px', '0px 0px 20px 0px']}
                >
                    {t('heading')}
                </Box>
                <Box
                    fontSize={['14px', '18px']}
                    fontWeight={'400'}
                    color={'#333B4F'}
                    textAlign={['center', 'left']}
                >
                    {t('subText')}
                </Box>
            </Flex>
        </Flex>
    );
};

export default AppyComponent;
