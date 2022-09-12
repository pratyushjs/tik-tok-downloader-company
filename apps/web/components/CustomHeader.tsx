import {Flex, HStack, Box} from '@chakra-ui/react';
import Image from 'next/image';
import TKHeader from '../static/images/TKHeader.png';

const CutsomHeader = () => {
    return (
        <Flex w={'full'} padding={'40px'} justifyContent={'space-between'}>
            <Box>
                <Image src={TKHeader} layout="intrinsic" />
            </Box>
            <HStack>
                <Box color={'#FFFFFF'} fontSize={'20px'}>
                    Home
                </Box>
                <Box color={'#FFFFFF'} fontSize={'20px'}>
                    Home
                </Box>
                <Box color={'#FFFFFF'} fontSize={'20px'}>
                    Home
                </Box>
            </HStack>
        </Flex>
    );
};

export default CutsomHeader;
