import {Box} from '@chakra-ui/react';
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
            <Box p={'0px 45px 45px 45px'} className="Homepage">
                <CutsomHeader />
                <Box padding={'23vh 0'}>
                    <InputHeaderText />
                    <FormInputComponentDynamic />
                </Box>
            </Box>
            <BottomData />
            <FAQ />
            <Footer />
        </section>
    );
};
