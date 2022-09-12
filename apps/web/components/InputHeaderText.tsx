import {Text} from '@chakra-ui/react';
import React from 'react';

const InputHeaderText = () => {
    return (
        <>
            <Text fontWeight={800} fontSize={['36px', '60px']} color={'white'}>
                Save tiktok videos &nbsp;
                <span className="InputFiledHeaderText__slim">without</span>
            </Text>
            <Text fontWeight={800} fontSize={['36px', '60px']} color={'white'}>
                watermark
            </Text>
        </>
    );
};

export default InputHeaderText;
