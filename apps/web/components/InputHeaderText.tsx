import {Flex, Text} from '@chakra-ui/react';
import React from 'react';
import {Spinner} from '@chakra-ui/react';
import {useTranslations} from 'next-intl';
const InputHeaderText = (props: any) => {
    console.log(props);
    const t = useTranslations('inputHeader');
    const {urlProgressType: type} = props;
    if (type == 'SUCCESS')
        return (
            <>
                <Text
                    fontWeight={[400, 800]}
                    fontSize={['36px', '60px']}
                    color={'white'}
                    p={['44% 0 3% 0', '17% 0 3% 0']}
                    textAlign={'center'}
                >
                    {t('success')}
                </Text>
            </>
        );
    if (type == 'DOWNLOADING')
        return (
            <>
                <Text
                    fontWeight={[400, 800]}
                    fontSize={['36px', '60px']}
                    color={'white'}
                    p={'3% 0'}
                    textAlign={'center'}
                >
                    {t('downloading')}
                </Text>
                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    p={'5% 0%'}
                >
                    <Spinner thickness="4px" speed="0.65s" size="xl" />
                </Flex>
            </>
        );
    if (type == 'FAILED')
        return (
            <>
                <Text
                    fontWeight={[400, 800]}
                    fontSize={['36px', '60px']}
                    color={'white'}
                    textAlign={'center'}
                    p={'3% 0'}
                >
                    {t('failed')}
                </Text>
            </>
        );
    return (
        <>
            <Text
                fontWeight={[400, 800]}
                fontSize={['36px', '60px']}
                color={'white'}
                textAlign={'center'}
            >
                {t('download')}
            </Text>
            <Text className="InputFiledHeaderText__slim">{t('watermark')}</Text>
        </>
    );
};

export default InputHeaderText;
