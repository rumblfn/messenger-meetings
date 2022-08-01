import {Heading, VStack} from "@chakra-ui/react";
import React from "react";

export const FriendsList = () => {
    return <VStack w='300px' h='400px' borderRadius='10px' boxShadow='xs' bg='white' p={2}>
        <Heading textAlign='start' size='md' w='100%'>Friends</Heading>
    </VStack>
}