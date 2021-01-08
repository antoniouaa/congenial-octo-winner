import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { MdPhotoCamera as CameraIcon } from 'react-icons/md';

export default function BackgroundSwitch({
  index,
  setBackgroundImage,
  ...props
}) {
  const nextImage = index => setBackgroundImage(index + 1);

  return (
    <IconButton
      size="lg"
      m="15px"
      fontSize="lg"
      variant="ghost"
      onClick={() => nextImage(index)}
      icon={<CameraIcon />}
      {...props}
    />
  );
}
