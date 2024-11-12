import { ChakraProvider } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return <ChakraProvider>{children}</ChakraProvider>
}

export default Providers
