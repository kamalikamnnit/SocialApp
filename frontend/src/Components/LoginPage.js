
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Link as ChakraLink,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import { useAuthenticationContext } from '../contexts/Authcontexts';
import { HashLink as Link } from 'react-router-hash-link';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authed, setAuth } = useAuthenticationContext();
  const toast = useToast();

    const handleGmailClick = () =>{
       window.location.href = 'https://mail.google.com'
    }
  const handleLoginClick = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      toast({
        title: 'Please Fill all the Fields',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const response = await axios.post(
        'http://localhost:5000/authUser',
        {
          email,
          password,
        },
        config
      );

      if (response.data) {
        toast({
          title: 'Login Successful',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'bottom',
        });
        setAuth(true);
        localStorage.setItem('userInfo', JSON.stringify(response.data));
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error Occured',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
    }
  };
 
  return (
    <Box bgGradient="linear(to-r, blue.600, blue.400)" py={10} minH="100vh" id = "login">
      <Container maxW="container.sm" centerContent>
        <Box
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="md"
          w="100%"
          textAlign="center"
        >
          <Heading mb={6}>Login</Heading>
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ChakraLink
              color="blue.500"
              onClick={() => navigate('/forgetPassword')}
            >
              Forgot password?
            </ChakraLink>
            <Button
              colorScheme="blue"
              size="lg"
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Flex justify="center" mt={4}>
              <IconButton
                icon={<FaFacebook />}
                isRound
                variant="ghost"
                colorScheme="facebook"
              />
              <IconButton
                icon={<FaTwitter />}
                isRound
                variant="ghost"
                colorScheme="twitter"
              />
              <IconButton onClick={handleGmailClick}
                icon={<FaGoogle />}
                isRound
                variant="ghost"
                colorScheme="red"
              />
            </Flex>
            <Text mt={4}>
              Don't have an account?{' '}
              <Link to="/register">
                <ChakraLink color="blue.500">Sign Up</ChakraLink>
              </Link>
            </Text>
          </VStack>
        </Box>
      </Container>

      <AboutUs />
    </Box>
  );
}

function AboutUs() {
  const navigate = useNavigate();

  return (
    <Box
     
      color="white"
      py={16}
      textAlign="center"
    >
      <Container maxW="container.md">
        <VStack spacing={6}>
          <Heading as="h1" size="2xl">
            About Us
          </Heading>
          <Text fontSize="lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Text>
          <Text fontSize="lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => navigate('/contactSection')}
          >
            LEARN MORE
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default LoginPage;
