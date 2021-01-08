import React, { useState } from 'react';
import { Flex, ScaleFade } from '@chakra-ui/react';

import CharacterForm from './CharacterForm';
import Profile from './Profile';
import BackgroundSwitch from './BackgroundSwitch';

export default function BlizzApp(props) {
  const images = [
    'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt0d2a5f3638b2890b/5f8096e961a67a1420846953/art_wallpaper_shatter_1920x1080_enus.jpg',
    'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltdef9ac58e3daf902/5f7f669bdd835814abdf5d03/art_wallpaper_bastion_1920x1080_enus.jpg',
    'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt346c6b802bd5f5c2/5f7e2048dd835814abdf5c93/art_wallpaper_ardenweald_1920x1080_enus.jpg',
    'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt00ab4a14d89003fb/5f808958dd835814abdf5d7b/art_wallpaper_maldraxxus_1920x1080_enus.jpg',
    'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt5e8c06902c877ef4/5f808e81cdb10a0cf7444bfe/art_wallpaper_revendreth_1920x1080_enus.jpg',
    'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltdfd2c8a2999110d6/5f7f6c2521bd3d0cf67e049a/art_wallpaper_bolvar_1920x1080_enus.jpg',
    'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt0a70f219593379ea/5dbb292924642a3b8da56e09/Wallpaper_1920x1080_-_Cinematic_1.jpg',
  ];

  const [backgroundImage, setBackgroundImage] = useState(0);
  const [characterDetails, setCharacterDetails] = useState({});

  const isLoaded = () => Object.keys(characterDetails).length === 0;

  return (
    <Flex
      h="100vh"
      w="100%"
      alignItems="stretch"
      justifyContent="center"
      flexDirection="row"
      backgroundImage={
        isLoaded() ? `url(${images[backgroundImage % images.length]})` : null
      }
      backgroundSize="100% 100%"
    >
      {isLoaded() ? (
        <BackgroundSwitch
          index={backgroundImage}
          setBackgroundImage={setBackgroundImage}
        />
      ) : null}
      <Flex
        id="character-form"
        w="100%"
        minH="660px"
        minW="800px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        overflowY="hidden"
      >
        <CharacterForm charObject={setCharacterDetails} />
        <ScaleFade in={!isLoaded()}>
          <Profile charDets={characterDetails} />
        </ScaleFade>
      </Flex>
    </Flex>
  );
}
