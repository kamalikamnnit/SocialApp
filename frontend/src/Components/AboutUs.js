

import React from 'react';
import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/contactSection');
  };

  return (
    <Box  bgGradient="linear(to-r, black, blue.600)" color="white" py={16} textAlign="center" id="About">
      <Container maxW="container.md">
        <VStack spacing={6}>
          <Heading as="h1" size="2xl">
            About Us
          </Heading>
          <Text fontSize="lg">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </Text>
          <Text fontSize="lg">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={handleLearnMoreClick}
          >
            LEARN MORE
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default AboutUs;
