'use client'

import { ChakraProvider } from '@chakra-ui/react'

const Providers = ({ children }) =>
  <ChakraProvider>
    {children}
  </ChakraProvider>

export default Providers
