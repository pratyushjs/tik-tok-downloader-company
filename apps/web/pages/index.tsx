import dynamic from 'next/dynamic';
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
        <section className="p-5 Homepage">
            <InputHeaderText />
            <FormInputComponentDynamic />
            {/* <Footer /> */}
        </section>
    );
};
