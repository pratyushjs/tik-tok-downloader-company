import {Box, Flex} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import BottomData from '../components/BottomData';
import FAQ from '../components/FAQ';
import {Footer} from '../components/Footer';
import CutsomHeader from '../components/CustomHeader';
import InputHeaderText from '../components/InputHeaderText';
import {useState} from 'react';

const FormInputComponentDynamic = dynamic(
    () => import('../components/FormInput'),
    {
        ssr: true,
    },
);

export default () => {
    const [urlProgressType, seturlProgressType] = useState('INITIAL');

    return (
        <section>
            <Flex
                p={['0 7%', '0px 45px 45px 45px']}
                bgGradient="linear(180deg, #e6436d 0%, #65d2e9 100%)"
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
            >
                <CutsomHeader />
                <Box padding={'2% 0 22% 0'}>
                    <InputHeaderText
                        type={'INITIAL'}
                        urlProgressType={urlProgressType}
                    />
                    <FormInputComponentDynamic
                        seturlProgressType={seturlProgressType}
                    />
                </Box>
            </Flex>
            <BottomData />
            <FAQ />
            <Footer />
        </section>
    );
};
