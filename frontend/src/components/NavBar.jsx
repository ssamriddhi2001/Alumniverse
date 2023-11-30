import React, { useState } from 'react';
import { Link as Navlink } from "react-router-dom";
import {
    Box,
    Flex,
    HStack,
    Button,
    Text,
    Link,
    Stack,
    IconButton,
    Image,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
// import { BiChevronDown } from 'react-icons/bi';
import logoImg from "../images/logo.png";


const navLinks = [

    { name: 'Home', to: '/' },
    { name: 'About', to: '/About' },
    { name: 'Events', to: '/events' },
    { name: 'Contact us', to: '/contact' },
];

// const dropdownLinks = [
//     {
//         name: 'Blog',
//         path: '#',
//     },
//     {
//         name: 'Documentation',
//         path: '#',
//     },
//     {
//         name: 'Github Repo',
//         path: '#',
//     },
// ];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <Box px={4} bg="white">
            <Flex h={16} alignItems="center" justifyContent="center" mx="auto">

                <Image src={logoImg} height={"3rem"} />
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                    <Link as={Navlink}
                        to="/" className='no-underline hover:text-[#4075ae]' style={{ textDecoration: 'none' }}> Alumniverse </Link>
                </Text>
                <HStack spacing={8} alignItems="center">
                    <HStack as="nav" spacing={6} p={"6"} display={{ base: 'none', md: 'flex' }} alignItems="center">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} name={link.name} path={link.path} to={link.to} onClick={closeMenu} />
                        ))}

                        {/* Dropdown Menu */}
                        {/* <Menu autoSelect={false} isLazy>
                            {({ isOpen: isDropdownOpen, onClose: closeDropdown }) => (
                                <>
                                    <MenuButton _hover={{ color: 'blue.400' }}>
                                        <Flex alignItems="center">
                                            <Text>Community</Text>
                                            <Icon
                                                as={BiChevronDown}
                                                h={5}
                                                w={5}
                                                ml={1}
                                                transition="all .25s ease-in-out"
                                                transform={isDropdownOpen ? 'rotate(180deg)' : ''}
                                            />
                                        </Flex>
                                    </MenuButton>
                                    <MenuList
                                        zIndex={5}
                                        bg="white"
                                        border="none"
                                        boxShadow={
                                            '2px 4px 6px 2px rgba(160, 174, 192, 0.6)'
                                        }
                                    >
                                        {dropdownLinks.map((link, index) => (
                                            <MenuLink key={index} name={link.name} path={link.path} onClick={closeDropdown} />
                                        ))}
                                    </MenuList>
                                </>
                            )}
                        </Menu> */}
                    </HStack>
                </HStack>

                <Button colorScheme="blue" size="md" rounded="md" display={{ base: 'none', md: 'block' }}>
                    <Link as={Navlink}
                        to="/login" style={{ textDecoration: 'none' }} > Sign in</Link>
                </Button>
                <IconButton
                    size="md"
                    icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    aria-label="Open Menu"
                    display={{ base: 'inherit', md: 'none' }}
                    onClick={toggleOpen}
                />
            </Flex>


            {/* Mobile Screen Links */}
            {isOpen ? (
                <Box pb={4} display={{ base: 'inherit', md: 'none' }}>
                    <Stack as="nav" spacing={2}>
                        {navLinks.map((link, index) => (
                            <NavLink key={index} name={link.name} path={link.path} to={link.to} onClick={closeMenu} />
                        ))}
                        {/* <Text fontWeight="semibold" color="gray.500">
                            Community
                        </Text> */}
                        <Stack pl={2} spacing={1} mt={'0 !important'}>
                            {/* {dropdownLinks.map((link, index) => (
                                <NavLink key={index} name={link.name} path={link.path} onClick={closeMenu} />
                            ))} */}
                        </Stack>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}

// NavLink Component
function NavLink({ name, path, onClick, to }) {
    return (
        <Link
            as={Navlink}
            to={to}
            lineHeight="inherit"
            _hover={{
                textDecoration: 'none',
                color: 'blue.500',
            }}
            onClick={onClick}
        >
            {name}
        </Link>
    );
}

// Dropdown MenuLink Component
// function MenuLink({ name, path, onClick }) {
//     return (
//         <Link to={path} onClick={onClick}>
//             <MenuItem _hover={{ color: 'blue.400', bg: 'gray.200' }}>
//                 <Text>{name}</Text>
//             </MenuItem>
//         </Link>
//     );
// }

export default Navbar;
