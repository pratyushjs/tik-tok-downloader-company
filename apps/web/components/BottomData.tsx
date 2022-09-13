import {Box, Text} from '@chakra-ui/react';
import React from 'react';
import CommonTextBox from './CommonTextBox';
import {fixedStrings} from '../static/fixedString';
import Tk from '../static/images/TK.png';
import Android from '../static/images/Android.png';
import TKBanner from '../static/images/TKBanner.png';
import PC from '../static/images/PC.png';
import PinkBubble from '../static/images/pinkbubble.png';
import LeftBlueBubble from '../static/images/LeftBlueBubble.png';
import IOS from '../static/images/IOS.png';
import Image from 'next/image';
const BottomData = () => {
    return (
        <Box p={['10%', '10%', '10%']} className="BottomData">
            {/* <Image src={IOSImg} alt="ios" layout="responsive" />
             <Box position={'absolute'} right={0} marginTop={['23%', '34%', '-33%']}>
                <Image src={BlueBubble} layout={'fixed'} />
            </Box> */}
            <Text
                lineHeight={['36px', '46px', '100px']}
                fontSize={['20px', '20px', '44px']}
                align={'center'}
                pt={['60px', '40px']}
            >
                The{' '}
                <span className="BottomData__blueHiglight">
                    fastest and easiest
                </span>{' '}
                way to{' '}
                <span className="BottomData__redHighlight">
                    {' '}
                    save videos is
                </span>{' '}
                to copy a link and paste it on{' '}
                <span className="BottomData__blueHiglight">appyhigh.com</span>
            </Text>
            <CommonTextBox
                heading={fixedStrings.bottomData.aboutTikTok.heading}
                description={fixedStrings.bottomData.aboutTikTok.description}
                headingFontSize={'64'}
                image={Tk}
            />
            <Box
                position={'absolute'}
                right={0}
                marginTop={['133%', '144%', '33%']}
            >
                <Image src={PinkBubble} layout="fixed" height={'440px'} />
            </Box>

            <Box m={['-10% -10%', '-30% 0 -10% 0']}>
                <Image src={TKBanner} layout="intrinsic" />
            </Box>
            <Box
                position={'absolute'}
                left={0}
                marginTop={['23%', '34%', '10%']}
                display={['none', 'none', 'initial']}
            >
                <Image src={LeftBlueBubble} layout="fixed" />
            </Box>
            <CommonTextBox
                heading={fixedStrings.bottomData.howToSave.heading}
                description={fixedStrings.bottomData.aboutTikTok.description}
                isReverse
                image={Android}
            />
            <Box
                position={'absolute'}
                right={0}
                marginTop={['23%', '34%', '18%']}
                display={['none', 'none', 'initial']}
            >
                <Image src={PinkBubble} layout="fixed" height={'440px'} />
            </Box>
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
