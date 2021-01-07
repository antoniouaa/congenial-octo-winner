import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import BlizzApp from './Components/BlizzApp';

function App() {
  return (
    <Box display="block" h="100%">
      <ChakraProvider theme={theme}>
        <BlizzApp />
      </ChakraProvider>
    </Box>
  );
}

export default App;
