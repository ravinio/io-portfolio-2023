import { extendTheme } from '@chakra-ui/react';
import "@fontsource/playfair-display"
import "@fontsource/plus-jakarta-sans"

const customTheme = extendTheme({
    fonts: {
      heading: `'Playfair Display', serif`,
      body:`'Plus Jakarta Sans', sans-serif`,
    },
  
    colors: {
      primary: "#ff23ed",
      secondary: "#ff23ed",
      darkColor: "#ff23ed",
      lightColor: "#ff23ed",
      whiteColor: "#ff23ed",
      gray: {
        800: "#101819",
      },
      // text color in Renaisance mode
      whiteAlpha: {
        900: "#CAD2C5",
      },
    },
  });
  
  export default customTheme;  