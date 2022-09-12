import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react';
import React from 'react';

const FAQ = () => {
    return (
        <Box bg={'rgba(240, 240, 240, 0.47)'} p={'40'}>
            <Accordion allowMultiple>
                {[1, 2, 3, 4, 5, 6].map((e) => (
                    <AccordionItem
                        border={'none'}
                        borderRadius={'0 0 12px 12px'}
                        overflow="hidden"
                        marginBottom={'16px'}
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
                                    How to use the app?
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
