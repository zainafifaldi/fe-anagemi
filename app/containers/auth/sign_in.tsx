import React, { useState } from "react";
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import {
  CheckIcon,
  LockIcon,
} from '@chakra-ui/icons';
import buttonStyles from 'styles/forms/buttons.module.scss';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(username + " -- " + password + " -- " + rememberMe);
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.headers.post['content-type'] ='charset=utf-8';
    // axios.defaults.headers.post['Content-Length'] ='application/x-www-form-urlencoded;charset=utf-8';
    // axios.defaults.headers.post['Accept'] ='application/json;charset=utf-8';
    let formdata = new FormData();
    formdata.append('username', username);
    formdata.append('password', password);
    // axios.post('http://localhost:8080/anagemi/index.php/api/auth/sign-in', formdata)
    //   .then(res => {
    //     console.log(res);
    //     window.open('/dashboard');
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // navigate('/dashboard');
    // window.open('/dashboard', '_self');
  }

  return (
    <>
      <Head>
        <title>Sign In | Nyewain</title>
      </Head>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'}>
              Halo :)
            </Heading>
            <Text fontSize={'sm'} color={'gray.600'}>
              Yuk masuk. Semoga harimu menyenangkan!
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <form onSubmit={ handleSubmit }>
              <Stack spacing={4}>
                <Text fontSize={'xs'} color={'gray.500'} align='center'>
                  Masukkan data login kamu di sini...
                </Text>
                <Stack spacing={4}>
                  <InputGroup size='sm'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<CheckIcon color='gray.300' />}
                    />
                    <Input
                      type='text'
                      placeholder='Username'
                      color='gray.600'
                      defaultValue={ username }
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup size='sm'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<LockIcon color='gray.300' />}
                    />
                    <Input
                      type='password'
                      placeholder='Password'
                      color='gray.600'
                      defaultValue={ password }
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </Stack>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox
                      size='md'
                      colorScheme='green'
                      defaultChecked={ rememberMe }
                      onChange={(e) => setRememberMe(e.target.checked)}
                    ><Text fontSize='sm' color='gray.500'>Otomatis login setiap membuka situs</Text></Checkbox>
                  </Stack>
                  <Button
                    type='submit'
                    bg={'green.400'}
                    color={'white'}
                    _hover={{
                      bg: 'green.500',
                    }}
                  >Sign in</Button>
                </Stack>
              </Stack>
            </form>
          </Box>
          <Link href=''>
            <a className={buttonStyles.noUnderline}>
              <Text color={'green.400'} fontSize='xs' _hover={{color:'green.600'}}>Lupa password? Yuk hubungi admin di sini</Text>
            </a>
          </Link>
        </Stack>
      </Flex>
    </>
  );
}
