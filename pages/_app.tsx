import { ChakraProvider } from "@chakra-ui/react"
// import {theme as chakraTheme} from "@chakra-ui/react"
// import { extendTheme } from "@chakra-ui/react"
import theme from "../styles/theme"

//const fonts = {
    // styles: {
        // global: {
            //...chakraTheme.fonts,
            // fonts: {
                //heading: `'Playfair Display', serif`,
                // heading: `'Playfair Display', serif`,
                // body: `'Plus Jakarta Sans', sans-serif`,
            // },
            // heading: "Playfair Display",
            // mono: "Menlo, monospace",
            // brand: {
            //     900: "#ff23ed",
            //     800: "#153e75",
            //     700: "#2a69ac",
            // },
        //},
    //},
//}
  
//const theme = extendTheme({ fonts })

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}