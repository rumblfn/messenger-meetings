import { extendTheme } from "@chakra-ui/react";

const theme = {
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    styles: {
        global: (props) => ({
            body: {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                transition: 'all 0.22s',
                fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                  sans-serif`,
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                backgroundColor: props.colorMode === 'dark' ? 'black' : 'white'
            },
              
            code: {
                fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
            }      
        })
    }
}

export default extendTheme(theme)