import {Box, Flex} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import BottomData from '../components/BottomData';
import FAQ from '../components/FAQ';
import {Footer} from '../components/Footer';
import CutsomHeader from '../components/CustomHeader';
import InputHeaderText from '../components/InputHeaderText';

const FormInputComponentDynamic = dynamic(
    () => import('../components/FormInput'),
    {
        ssr: true,
    },
);

export default () => {
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
                <Box padding={'12% 0'}>
                    <InputHeaderText />
                    <FormInputComponentDynamic />
                </Box>
            </Flex>
            <BottomData />
            <FAQ />
            <Footer />
        </section>
    );
};
