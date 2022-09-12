import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import CommonTextBox from './CommonTextBox';
import {fixedStrings} from '../static/fixedString';
const BottomData = () => {
    return (
        <Box p={40} className='BottomData'>
            <Text lineHeight={'100px'} fontSize={'44px'} align={'center'}>
                The <span className='BottomData__blueHiglight'>fastest and easiest</span> way to <span className='BottomData__redHighlight'> save videos is </span>to copy a link and paste it on <span className='BottomData__blueHiglight'>appyhigh.com</span>
            </Text>
            <CommonTextBox heading={fixedStrings.bottomData.aboutTikTok.heading} description={fixedStrings.bottomData.aboutTikTok.description} headingFontSize={'64'} />
            <CommonTextBox heading={fixedStrings.bottomData.howToSave.heading} description={fixedStrings.bottomData.aboutTikTok.description} isReverse/>
            <CommonTextBox heading={fixedStrings.bottomData.withoutWaterMark.heading} description={fixedStrings.bottomData.withoutWaterMark.description} />
            <CommonTextBox heading={fixedStrings.bottomData.saveOnIOS.heading} description={fixedStrings.bottomData.saveOnIOS.description} isReverse/>
            
            
        </Box>
    )
}

export default BottomData