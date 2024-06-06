import { Box, Container, Flex, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        as="nav"
        bg="blue.500"
        color="white"
        p={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Flex>
          <Link to="/">
            <Text mx={2}>Home</Text>
          </Link>
          <Link to="/about">
            <Text mx={2}>About</Text>
          </Link>
          <Link to="/contact">
            <Text mx={2}>Contact</Text>
          </Link>
        </Flex>
      </Flex>
      <Box
        as="main"
        p={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={isMobile ? "auto" : "100vh"}
      >
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with Chakra UI.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;