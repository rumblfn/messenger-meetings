import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button onClick={() => toggleColorMode()}>
            {colorMode === "dark" ?
                <FontAwesomeIcon icon={faSun}/>
                : <FontAwesomeIcon icon={faMoon}/>}
        </Button>
    );
};

export default ToggleColorMode;
