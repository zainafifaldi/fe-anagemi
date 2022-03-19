import {
  Container,
  useColorModeValue
} from '@chakra-ui/react';

const AuthLayout = ({ children }) => {
  return (
    <Container maxW="container.xl" p={0} bg={useColorModeValue('gray.50', 'gray.800')}>
      { children }
    </Container>
  );
}

export default AuthLayout;