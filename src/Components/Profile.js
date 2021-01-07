import { Flex, Image, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { Box, Text } from '@chakra-ui/react';

export default function Profile({ charDets }) {
  const endpoint = process.env.REACT_APP_API_CHARACTER_PROFILE;
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  const { colorMode } = useColorMode();

  const { charName, realmName } = charDets;
  const [character, setCharacter] = useState({});

  const fetchProfile = (charName, realmName) => {
    const target = new URL(`${realmName}/${charName}`, endpoint);
    target.searchParams.append('namespace', 'profile-eu');
    target.searchParams.append('locale', 'eu_US');
    console.log(target);
    fetch(target, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(data => data.json())
      .then(json => setCharacter(json));
  };

  useEffect(() => fetchProfile(charName, realmName), [charName, realmName]);

  return (
    <Flex
      w="50%"
      mt="10%"
      borderRadius="10px"
      textAlign="center"
      alignItems="left"
      flexDirection="column"
      bg={colorMode ? 'blue.400' : 'gray.100'}
    >
      <Text>{character.id}</Text>
    </Flex>
  );
}