import {Text} from '@chakra-ui/react';
import React from 'react';

const InputHeaderText = (props: any) => {
    const {type} = props;
    if (type == 'DOWNLOADING')
        return (
            <>
                <Text
                    fontWeight={800}
                    fontSize={['36px', '60px']}
                    color={'white'}
                >
                    Your video is downloading
                </Text>
            </>
        );
    if (type == 'FAILED')
        return (
            <>
                <Text
                    fontWeight={800}
                    fontSize={['36px', '60px']}
                    color={'white'}
                    textAlign={'center'}
                >
                    Downloading failed
                </Text>
            </>
        );
    return (
        <>
            <Text fontWeight={800} fontSize={['36px', '60px']} color={'white'} textAlign={'center'}>
                Download tiktok videos &nbsp;
                <span className="InputFiledHeaderText__slim">without</span>
            </Text>
            <Text
                fontWeight={800}
                fontSize={['36px', '60px']}
                color={'white'}
                textAlign={'center'}
                pb={'20px'}
            >
                watermark
            </Text>
        </>
    );
};

export default InputHeaderText;
