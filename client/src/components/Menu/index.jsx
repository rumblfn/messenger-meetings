import React, {useContext, useState} from "react";
import {Avatar, Box, Button, Heading, HStack, Image, Input, Spacer, Text} from "@chakra-ui/react";
import {AccountContext} from "../AccountContext";
import styles from './style.module.css'
import ToggleColorMode from "../ColorMode";

export const MenuBar = () => {
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
        <Spacer />
        <ToggleColorMode />
    </HStack>
}