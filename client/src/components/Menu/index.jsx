import React, {useContext, useState} from "react";
import {Avatar, Box, Button, Heading, HStack, Image, Spacer, Text} from "@chakra-ui/react";
import {AccountContext} from "../AccountContext";
import styles from './style.module.css'
import ToggleColorMode from "../ColorMode";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FriendsList} from "../FriendsList";

export const MenuBar = () => {
    const [showFriends, setShowFriends] = useState(false)
    const {user} = useContext(AccountContext)
    console.log(user)
    let avatarSrc;

    if (user?.avatar) {
        if (user.avatar.startsWith("data")) {
            avatarSrc = user.avatar;
        } else {
            avatarSrc = `${process.env.REACT_APP_HOST_URL}/images/avatars/${user.avatar}`;
        }
    }

    return <HStack w='100%' p={2} alignItems='center'>
        {avatarSrc ? (
            <Image
                className={styles["avatar-image"]}
                crossOrigin="anonymous"
                src={avatarSrc}
            />
        ) : (
            <Avatar size="md" name={user?.username} src={avatarSrc} />
        )}
        <Heading fontSize="md" wordBreak="break-all">
            {user?.username}
        </Heading>
        <Box position='relative'>
            <Button size='xs' onClick={() => setShowFriends(prev => !prev)}>
                <Text mr={2}>Invite</Text>
                <FontAwesomeIcon icon={faUserPlus} />
            </Button>
            <Box position='absolute' top='50px' zIndex={1} display={showFriends ? 'block' : 'none'}>
                <FriendsList />
            </Box>
        </Box>
        <Spacer />
        <ToggleColorMode />
    </HStack>
}