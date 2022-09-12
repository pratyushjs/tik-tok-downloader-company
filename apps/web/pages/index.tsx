import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import BottomData from '../components/BottomData';
import FAQ from '../components/FAQ';
import { Footer } from '../components/Footer';
// import {Footer} from '../components/Footer';
import InputHeaderText from '../components/InputHeaderText';

const FormInputComponentDynamic = dynamic(
    () => import('../components/FormInput'),
    {
        ssr: false,
    },
);

export default () => {
    return (
        <section>
            <Box p={ 45 } className='Homepage'>


            <InputHeaderText />
            <FormInputComponentDynamic />
            </Box>
            <BottomData />
            <FAQ/>
            <Footer />
        </section>
    );
};
