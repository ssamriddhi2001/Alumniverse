import * as React from 'react';
import { Container, Heading, Stack, HStack, Text, Button } from '@chakra-ui/react';


const HeroSection = () => {
    return (
        <Container maxW="7xl" p={4}>
            <Stack direction="column" spacing={6} alignItems="center" mt={8} mb={16}>
                <Heading as="h1" fontSize="4xl" fontWeight="bold" textAlign="center" maxW="600px">
                    Welcome to Alumniverse!
                </Heading>
                <Text fontSize={"xl"}>Empowering Connections Beyond Campus</Text>
                <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">

                </Text>
                <HStack spacing={5}>
                    <Button colorScheme="blue" variant="solid" rounded="md" size="lg">
                        Get Started
                    </Button>
                </HStack>
            </Stack>

        </Container>
    );
};

export default HeroSection;