import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { MdPhotoCamera } from 'react-icons/md';

export default function BackgroundSwitch({
  images,
  setBackgroundImage,
  ...props
}) {
  const pickImage = () => {
    const index = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[index]);
  };

  return (
    <IconButton
      size="lg"
      m="15px"
      fontSize="lg"
      variant="ghost"
      onClick={() => pickImage()}
      icon={<MdPhotoCamera />}
      {...props}
    />
  );
}
