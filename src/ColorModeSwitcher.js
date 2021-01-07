import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('blue.500', 'blue.500');
  const color = useColorModeValue('white', 'gray.800');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="lg"
      m="15px"
      fontSize="lg"
      aria-label={`Switch to ${colorMode} mode`}
      variant="ghost"
      color={color}
      marginLeft="2"
      bg={bg}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
