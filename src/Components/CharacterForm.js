import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

export default function CharacterForm({ charObject, ...props }) {
  const [charName, setCharName] = useState('');
  const [realmName, setRealmName] = useState('');
  const [showForm, setShowForm] = useState(true);
  const { colorMode } = useColorMode();

  const submitHandler = event => {
    event.preventDefault();
    const c = {
      charName,
      realmName,
    };
    charObject(c);
    setShowForm(false);
  };

  const clearHandler = event => {
    setCharName('');
    setRealmName('');
  };

  const checkIsFilled = () => Boolean(charName) && Boolean(realmName);

  return (
    <Box
      w="30%"
      m="auto"
      p="5px 5px 5px 5px"
      textAlign="left"
      borderRadius="10px 10px 0 0"
      boxShadow="inset 0 0 2000px rgba(10, 10, 30, 1)"
      display={showForm ? {} : 'none'}
    >
      <Box>
        <Text p="10px" fontSize="3xl">
          <QuestionOutlineIcon mr="10px" w="10" h="10" color="orange.500" />
          Search for any WoW character
        </Text>
      </Box>
      <FormControl
        isRequired
        id="characterForm"
        border="2px"
        borderColor="gray.200"
        borderRadius="10px"
        padding="5px"
        bg={colorMode === 'light' ? 'white' : 'dark'}
      >
        <FormLabel>Character Name</FormLabel>
        <Input
          id="charName"
          isRequired
          value={charName}
          bg="rgba(254, 235, 200, 0.15)"
          onChange={e => setCharName(e.currentTarget.value)}
        />
        <FormLabel>Realm Name</FormLabel>
        <Input
          id="realmName"
          isRequired
          value={realmName}
          bg="rgba(254, 235, 200, 0.15)"
          onChange={e => setRealmName(e.currentTarget.value)}
        />
      </FormControl>
      <Button
        float="left"
        mt="5px"
        w="50%"
        bg="blue.400"
        disabled={!checkIsFilled()}
        onClick={submitHandler}
      >
        Search
      </Button>
      <Button
        type="submit"
        float="right"
        mt="5px"
        w="20%"
        variant="ghost"
        onClick={clearHandler}
      >
        Clear
      </Button>
    </Box>
  );
}
