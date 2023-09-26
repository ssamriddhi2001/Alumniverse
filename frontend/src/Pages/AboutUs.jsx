import {
    Container,
    Box,
    chakra,
    Flex,
    Text,
    Stack,
    Avatar,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react';




const testimonials = [
    {
        name: 'Saurabh Patel',
        // position: 'CEO',
        // company: 'Olpers',
        image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
        content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper`
    },
    {
        name: 'Samriddhi Sharma',
        // position: 'GM',
        // company: 'Olpers',
        image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
        content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper`
    },
    {
        name: 'Vivek Kumar Shaw',
        // position: 'CFO',
        // company: 'Olpers',
        image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
        content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper`
    },
    {
        name: 'Sourojit Das',
        // position: 'CFO',
        // company: 'Olpers',
        // image: 'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        image: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
        content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper`
    }
];

const AboutUs = () => {
    // Move the useColorModeValue call here
    const bgColor = useColorModeValue('gray.200', 'gray.600');

    return (
        <Container maxW="5xl" py={10} px={6} bg={bgColor}>
            <Flex justify="center" mb={8}>
                <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3} textAlign="center">
                    About Us
                </chakra.h3>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={1} mt={12} mb={4}>
                {testimonials.map((obj, index) => (
                    <Stack
                        key={index}
                        direction={{ base: 'column', sm: 'row' }}
                        spacing={2}
                        mb={5}
                        justify="center"
                    >
                        <Stack
                            maxW="345px"
                            boxShadow="lg"
                            rounded="md"
                            p={6}
                            pos="relative"
                            // bg={useColorModeValue('white', 'gray.800')}
                            _after={{
                                content: `""`,
                                w: '0',
                                h: '0',
                                // borderColor: `transparent ${useColorModeValue('white', '#1a202c')} transparent`,
                                borderStyle: 'solid',
                                borderWidth: '10px 0 10px 10px',
                                position: 'absolute',
                                top: { base: 'unset', sm: '45%' },
                                right: { base: 'unset', sm: '-10px' },
                                left: { base: '48%', sm: 'unset' },
                                bottom: { base: '-15px', sm: 'unset' },
                                transform: { base: 'rotate(90deg)', sm: 'unset' },
                                display: 'block'
                            }}
                        >
                            <Text fontWeight="medium" fontSize="sm">
                                {obj.content}
                            </Text>
                        </Stack>
                        <Stack direction="column" spacing={2} p={2} justify="flex-end" alignItems="center">
                            <Avatar
                                size="lg"
                                showBorder={true}
                                borderColor="green.400"
                                name="avatar"
                                src={obj.image}
                            />
                            <Box textAlign="center">
                                <Text fontWeight="bold" fontSize="md">
                                    {obj.name}
                                </Text>
                                <Text fontWeight="medium" fontSize="xs" color="gray.400">
                                    {obj.position}, {obj.company}
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default AboutUs;
