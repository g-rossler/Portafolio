import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Koulen, ${base.fonts?.heading}`,
    body: `Bebas Neue, ${base.fonts?.body}`,
  },
  components: {
    Button: {
      variants: {
        primary: {
          fontFamily: 'Koulen',
          fontSize: '18px',
          letterSpacing: '2px',
          textDecoration: 'none',
          color: '#000',
          cursor: 'pointer',
          border: '3px solid #5FE2D1',
          padding: '0.25em 0.5em',
          boxShadow: '1px 1px 0px 0px #5FE2D1, 2px 2px 0px 0px #5FE2D1, 3px 3px 0px 0px #5FE2D1, 4px 4px 0px 0px #5FE2D1, 5px 5px 0px 0px #5FE2D1',
          userSelect: 'none',
          minW: '200px',
          bg: 'white',
          _active: {
            boxShadow: '0px 0px 0px 0px',
            top: '5px',
            left: '5px',
          },
          _focus: {
            boxShadow: '1px 1px 0px 0px #5FE2D1, 2px 2px 0px 0px #5FE2D1, 3px 3px 0px 0px #5FE2D1, 4px 4px 0px 0px #5FE2D1, 5px 5px 0px 0px #5FE2D1',
            ringColor: 'none',
          },
          _hover: {
            bg: 'black',
            color: 'white',
            border: '3px solid #FFFFFF',
            boxShadow: '1px 1px 0px 0px #FFFFFF, 2px 2px 0px 0px #FFFFFF, 3px 3px 0px 0px #FFFFFF, 4px 4px 0px 0px #FFFFFF, 5px 5px 0px 0px #FFFFFF',
          },

        },
      },
    },
  },
});

export default theme;
