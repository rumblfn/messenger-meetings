import { Button, HStack } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import {
  faComments,
  faDesktop,
  faMicrophone,
  faMicrophoneSlash,
  faPhoneSlash,
  faVideo,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomBar = ({
  clickChat,
  clickCameraDevice,
  goToBack,
  toggleCameraAudio,
  userVideoAudio,
  clickScreenSharing,
  screenShare,
  videoDevices,
  showVideoDevices,
  setShowVideoDevices
}) => {
  const handleToggle = useCallback(
    (e) => {
      setShowVideoDevices((state) => !state);
    },
    [setShowVideoDevices]
  );

  return (
    <HStack pt={2} pb={6}>
      <Button
        onClick={toggleCameraAudio}
        data-switch="video"
        color={!userVideoAudio.video && "red.500"}
        p={0}
      >
        <FontAwesomeIcon
          data-switch="video"
          icon={userVideoAudio.video ? faVideo : faVideoSlash}
        />
      </Button>
      <Button
        onClick={toggleCameraAudio}
        data-switch="audio"
        color={!userVideoAudio.audio && "red.500"}
        p={0}
      >
        <FontAwesomeIcon
          icon={userVideoAudio.audio ? faMicrophone : faMicrophoneSlash}
        />
      </Button>
      <Button
        color={screenShare && "red.500"}
        p={0} onClick={clickScreenSharing}
      >
        <FontAwesomeIcon icon={faDesktop} />
      </Button>
      <Button color="red.500" p={0} onClick={goToBack}>
        <FontAwesomeIcon icon={faPhoneSlash} />
      </Button>
      <Button p={0} onClick={clickChat}>
        <FontAwesomeIcon icon={faComments} />
      </Button>
    </HStack>
  );
};

export default BottomBar;