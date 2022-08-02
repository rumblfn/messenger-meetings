import { Button, HStack } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import {
    faComments,
    faDesktop, faHeadphones, faHeadphonesAlt,
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
        onClick={e => toggleCameraAudio(e, 'video')}
        color={!userVideoAudio.video && "red.500"}
        p={0}
      >
          <FontAwesomeIcon icon={userVideoAudio.video ? faVideo : faVideoSlash}/>
      </Button>
      {/*<Button*/}
      {/*  onClick={e => toggleCameraAudio(e, "headphones")}*/}
      {/*  color={!userVideoAudio.headphones && "red.500"}*/}
      {/*  p={0}*/}
      {/*>*/}
      {/*  <FontAwesomeIcon icon={userVideoAudio.headphones ? faHeadphones : faHeadphonesAlt}/>*/}
      {/*</Button>*/}
      <Button
        onClick={e => toggleCameraAudio(e, "audio")}
        color={!userVideoAudio.audio && "red.500"}
        p={0}
      >
        <FontAwesomeIcon icon={userVideoAudio.audio ? faMicrophone : faMicrophoneSlash}/>
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