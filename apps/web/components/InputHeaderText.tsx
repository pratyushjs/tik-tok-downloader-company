import {Text} from '@chakra-ui/react';
import React from 'react';

const InputHeaderText = () => {
    return (
        <>
            <Text className="InputFiledHeaderText">
                Save tiktok videos &nbsp;
                <span className="InputFiledHeaderText__slim">without</span>
            </Text>
            <Text className="InputFiledHeaderText">watermark</Text>
        </>
    );
};

export default InputHeaderText;
