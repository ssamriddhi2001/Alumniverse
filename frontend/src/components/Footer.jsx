import {
    Box,
    Stack,
    HStack,
    VStack,
    Link,
    Divider,
    Image,
    Text,
    Button,

    LinkProps
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';
import logoImg from "../logo.png";

const Footer = () => {
    return (
        <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">

            <Box className='flex' alignContent={"center"} alignSelf={"center"} justifyItems={"center"} maxW="300px" flexDirection={{ base: "row", md: "column" }}>
                <Link href="https://templateskart.com" isExternal>
                    <Image w="100px" src={logoImg} alt="TemplatesKart" />
                </Link>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                    Alumniverse
                </Text>
                <Text mt={2} color="gray.500" fontSize="md">
                    Fostering Strong Connections, Empowering Alumni, and Bridging the Path to Lifelong Success.
                </Text>
            </Box>
            {/* <HStack
                    spacing={4}
                    d={{ base: 'none', sm: 'flex' }}
                    justifyContent={{ sm: 'space-between', md: 'normal' }}
                >
                    <VStack spacing={4} alignItems="flex-start">
                        <Text fontSize="md" fontWeight="bold">
                            About
                        </Text>
                        <VStack spacing={2} alignItems="flex-start" color="gray.500">
                            <CustomLink>Contrinute</CustomLink>
                            <CustomLink>Media assets</CustomLink>
                            <CustomLink>Changelog</CustomLink>
                            <CustomLink>Releases</CustomLink>
                        </VStack>
                    </VStack>
                    <VStack spacing={4} alignItems="flex-start">
                        <Text fontSize="md" fontWeight="bold">
                            Community
                        </Text>
                        <VStack spacing={2} alignItems="flex-start" color="gray.500">
                            <CustomLink>Chat on Discord</CustomLink>
                            <CustomLink>Follow on Twitter</CustomLink>
                            <CustomLink>Follow on Github</CustomLink>
                            <CustomLink>Github discussions</CustomLink>
                        </VStack>
                    </VStack>
                    <VStack spacing={4} alignItems="flex-start">
                        <Text fontSize="md" fontWeight="bold">
                            Project
                        </Text>
                        <VStack spacing={2} alignItems="flex-start" color="gray.500">
                            <CustomLink>TemplatesKart</CustomLink>
                            <CustomLink>Documentation</CustomLink>
                            <CustomLink>Github organization</CustomLink>
                            <CustomLink>npm organization</CustomLink>
                        </VStack>
                    </VStack>
                </HStack> */}


            <Divider my={4} />

            <Stack className='flex' flexDirection={{ base: 'column', md: 'row' }} spacing={3} justifyContent="center">

                <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
                    <Text href="/" rounded="md" colorScheme="gray">
                        Copyright &copy; Aluminverse | All Rights Reserved
                    </Text>
                </Stack>
            </Stack>
        </Box>
    );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
    return (
        <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
            {children}
        </Link>
    );
};

export default Footer;