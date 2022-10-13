import {
    Box,
    Flex,
    HStack,
    Text,
    IconButton,
    Stack,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Drawer,
    DrawerContent,
    DrawerBody,
    DrawerCloseButton,
    DrawerHeader,
    DrawerOverlay,
} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon, ChevronRightIcon} from '@chakra-ui/icons';
import Image from 'next/image';
import TKHeader from '../static/images/TKHeader.png';
import {useTranslations} from 'next-intl';
const DesktopNav = () => {
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const t = useTranslations('header');
    const points = t.raw('points');
    console.log(t('aboutTikTok.description[0]'));
    return (
        <Stack direction={'row'} spacing={4}>
            {points.map((navItem: any) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'20px'}
                                fontWeight={400}
                                color={'white'}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}
                            >
                                <Stack>
                                    {navItem.children.map(
                                        (
                                            child: JSX.IntrinsicAttributes &
                                                NavItem,
                                        ) => (
                                            <DesktopSubNav
                                                key={child.label}
                                                {...child}
                                            />
                                        ),
                                    )}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({label, href, subLabel}: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            color={'black'}
            rounded={'md'}
            _hover={{bg: useColorModeValue('pink.50', 'gray.900')}}
        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{color: 'pink.400'}}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}
                >
                    <Icon
                        color={'pink.400'}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Link>
    );
};

interface MobileNav {
    isOpen: boolean;
    onClose: () => void;
    onToggle: () => void;
}
const MobileNav = ({isOpen, onClose, onToggle}: MobileNav) => {
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const t = useTranslations('header');
    const points = t.raw('points');
    return (
        <Drawer isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader>
                    <DrawerCloseButton />
                </DrawerHeader>
                <DrawerBody>
                    {points.map((navItem: any) => (
                        <Link
                            p={2}
                            href={navItem.href ?? '#'}
                            fontSize={'20px'}
                            fontWeight={400}
                            color={'black'}
                            display={'inline-block'}
                            _hover={{
                                textDecoration: 'none',
                                color: linkHoverColor,
                            }}
                            onClick={onToggle}
                        >
                            {navItem.label}
                        </Link>
                    ))}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

// const NAV_ITEMS: Array<NavItem> = [
//     {
//         label: 'How to save tiktok videos?',
//         href: '#',
//     },
//     {
//         label: 'FAQs',
//         href: '#FAQS',
//     },
//     // {
//     //     label: 'Download app',
//     //     children: [
//     //         {
//     //             label: 'MAC',
//     //             subLabel: 'For OSX and above',
//     //             href: '#',
//     //         },
//     //         {
//     //             label: 'Windows',
//     //             subLabel: 'From windows 10 and above',
//     //             href: '#',
//     //         },
//     //     ],
//     // },
// ];

const CutsomHeader = () => {
    const {isOpen, onToggle, onClose} = useDisclosure();
    return (
        <Flex
            w={'full'}
            padding={['3% 0 0 7%', '40px']}
            justifyContent={'space-between'}
            position={'absolute'}
            top={'0'}
            left={0}
            background={'rgba(0, 0, 0, 0.2)'}
        >
            <Box
                w={['24px', '3%']}
                height={['28px']}
                padding={['5% 0 0 0%', '0px']}
            >
                <Image src={TKHeader} layout={'responsive'} />
            </Box>
            <HStack>
                <Box>
                    <Flex
                        color={'white'}
                        minH={'60px'}
                        py={{base: 2}}
                        px={{base: 4}}
                        align={'center'}
                    >
                        <Flex
                            flex={{base: 1, md: 'auto'}}
                            ml={{base: 0}}
                            display={{base: 'flex', md: 'none'}}
                        >
                            <IconButton
                                onClick={onToggle}
                                icon={
                                    isOpen ? (
                                        <CloseIcon w={3} h={3} />
                                    ) : (
                                        <HamburgerIcon w={5} h={5} />
                                    )
                                }
                                variant={'ghost'}
                                aria-label={'Toggle Navigation'}
                            />
                        </Flex>
                        <Flex
                            flex={{base: 1}}
                            justify={{base: 'center', md: 'start'}}
                        >
                            <Flex display={{base: 'none', md: 'flex'}} ml={10}>
                                <DesktopNav />
                            </Flex>
                        </Flex>
                    </Flex>
                    <MobileNav
                        isOpen={isOpen}
                        onClose={onClose}
                        onToggle={onToggle}
                    />
                </Box>
            </HStack>
        </Flex>
    );
};

export default CutsomHeader;
