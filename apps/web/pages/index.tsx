import {Box, Flex} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import FAQ from '../components/FAQ';
import {Footer} from '../components/Footer';
import CutsomHeader from '../components/CustomHeader';
import InputHeaderText from '../components/InputHeaderText';
import {useState} from 'react';
import ThreeEasySteps from '../components/ThreeEasySteps';
import KeySteps from '../components/KeySteps';
import AppyComponent from '../components/AppyComponent';
import BestPlace from '../components/BestPlace';
import AndroidSection from '../components/AndroidSection';
import IOSSection from '../components/IOSSection';
import PcSection from '../components/PcSection';

const FormInputComponentDynamic = dynamic(
    () => import('../components/FormInput'),
    {
        ssr: true,
    },
);

export default () => {
    const [urlProgressType, seturlProgressType] = useState('INITIAL');
    console.log(urlProgressType);

    return (
        <section>
            <Flex
                p={['0 7%', '0px 45px 45px 45px']}
                bgGradient="linear(292.45deg, #7F197C 0%, #3B3B9A 98.67%)"
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                minH={'100vh'}
            >
                <CutsomHeader />
                <Box padding={'2% 0 2% 0'} w="100%">
                    <InputHeaderText urlProgressType={urlProgressType} />
                    <FormInputComponentDynamic
                        seturlProgressType={seturlProgressType}
                    />
                </Box>
            </Flex>
            <ThreeEasySteps />
            <KeySteps />
            <AndroidSection />
            <IOSSection />
            <PcSection />
            <BestPlace />
            <AppyComponent />
            {/* <BottomData /> */}
            <FAQ />
            <Footer />
        </section>
    );
};
