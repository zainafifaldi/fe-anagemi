import AuthLayout from 'layouts/auth';
import { Flex, VStack } from '@chakra-ui/react';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

export default function Signin() {
  return (
    <AuthLayout>
      <Flex h="100vh" py={20}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start"></VStack>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start"></VStack>
      </Flex>

      <Head>
        <title>Sign In</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Sign In</h1>
      Go To {' '}
      <Link href="/dashboard">Dashboard</Link>
      <Image src="/images/shocktober.jpg" width={1280} height={720} alt="Quipper Shocktober" />
    </AuthLayout>
  );
}
