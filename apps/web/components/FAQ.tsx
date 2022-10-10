import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
} from '@chakra-ui/react';
import React from 'react';
import {fixedStrings} from '../static/fixedString';

const FAQ = () => {
    return (
        <Box bg={'rgba(240, 240, 240, 0.47)'} p={['10%', '10%']} id={'FAQS'}>
            <Heading
                fontSize={['32px', '48px']}
                fontWeight={'700'}
                textAlign="center"
                pb={['54px', '108px']}
            >
                Frequently asked questions.
            </Heading>
            <Accordion allowMultiple>
                {fixedStrings.FAQS.map((FAQ, i) => (
                    <AccordionItem
                        border={'none'}
                        borderRadius={'0 0 12px 12px'}
                        overflow="hidden"
                        marginBottom={'16px'}
                        key={`${FAQ}i`}
                    >
                        <h2>
                            <AccordionButton
                                borderRadius={'12px 12px 0 0'}
                                bg={'white'}
                                _hover={{bg: 'white'}}
                                p={'23px'}
                            >
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    color={'#2B2B2B'}
                                    fontSize={'20px'}
                                    fontWeight={'400'}
                                >
                                    {FAQ.heading}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            borderRadius={'0 0 12px 12px'}
                            bg={'white'}
                            color={'#747474'}
                            fontSize={'16px'}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
};

export default FAQ;
