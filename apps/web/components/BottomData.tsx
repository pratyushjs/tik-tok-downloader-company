import {Box, Text} from '@chakra-ui/react';
import React from 'react';
import CommonTextBox from './CommonTextBox';
import {fixedStrings} from '../static/fixedString';
import IOSImg from '../static/images/IOSImg.png';
import Tk from '../static/images/TK.png';
import Android from '../static/images/Android.png';
import TKBanner from '../static/images/TKBanner.png';
import PC from '../static/images/PC.png';

import IOS from '../static/images/IOS.png';
import Image from 'next/image';
const BottomData = () => {
    return (
        <Box p={40} className="BottomData">
            <Image src={IOSImg} alt="ios" layout="responsive" />
            <Text
                lineHeight={'100px'}
                fontSize={'44px'}
                align={'center'}
                pt={'40'}
            >
                The{' '}
                <span className="BottomData__blueHiglight">
                    fastest and easiest
                </span>{' '}
                way to{' '}
                <span className="BottomData__redHighlight">
                    {' '}
                    save videos is{' '}
                </span>
                to copy a link and paste it on{' '}
                <span className="BottomData__blueHiglight">appyhigh.com</span>
            </Text>
            <CommonTextBox
                heading={fixedStrings.bottomData.aboutTikTok.heading}
                description={fixedStrings.bottomData.aboutTikTok.description}
                headingFontSize={'64'}
                image={Tk}
            />
            <Image src={TKBanner} layout="intrinsic" />
            <CommonTextBox
                heading={fixedStrings.bottomData.howToSave.heading}
                description={fixedStrings.bottomData.aboutTikTok.description}
                isReverse
                image={Android}
            />
            <CommonTextBox
                heading={fixedStrings.bottomData.withoutWaterMark.heading}
                description={
                    fixedStrings.bottomData.withoutWaterMark.description
                }
                image={PC}
            />
            <CommonTextBox
                heading={fixedStrings.bottomData.saveOnIOS.heading}
                description={fixedStrings.bottomData.saveOnIOS.description}
                isReverse
                image={IOS}
            />
        </Box>
    );
};

export default BottomData;
