import React, { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

import CharacterForm from './CharacterForm';
import Profile from './Profile';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function BlizzApp(props) {
  const [characterDetails, setCharacterDetails] = useState({});
  return (
    <Flex
      h="100%"
      w="100%"
      alignItems="stretch"
      justifyContent="center"
      flexDirection="row"
      justifyContent="left"
    >
      <ColorModeSwitcher />
      <Flex
        id="character-form"
        w="100%"
        h="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        overflowY="hidden"
        backgroundImage={
          Object.keys(characterDetails).length === 0
            ? "url('https://cdnassets.raider.io/images/login/backgrounds/expansion8/bastion1.jpg')"
            : null
        }
        backgroundPosition="50%"
        backgroundAttachment="fixed"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <CharacterForm charObject={setCharacterDetails} />
        {Object.keys(characterDetails).length !== 0 ? (
          <Profile charDets={characterDetails} />
        ) : null}
      </Flex>
    </Flex>
  );
}
