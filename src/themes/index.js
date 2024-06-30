/* eslint-disable quotes */
import { keyframes, extendTheme, theme as base } from "@chakra-ui/react";

const buttonKeyframes = keyframes`
0% {
  background-position: 0 0;
}
50% {
  background-position: 400% 0;
}
100% {
  background-position: 0 0;
}
`;

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
  fonts: {
    heading: `Koulen, ${base.fonts?.heading}`,
    body: `Bebas Neue, ${base.fonts?.body}`,
  },
  components: {
    Text: {
      variants: {
        primary: {
          fontFamily: "Ubuntu Mono",
        },
      },
    },
    Button: {
      variants: {
        primary: {
          fontFamily: "Koulen",
          fontSize: "18px",
          letterSpacing: "2px",
          textDecoration: "none",
          color: "#000",
          cursor: "pointer",
          border: "3px solid #5FE2D1",
          padding: "0.25em 0.5em",
          boxShadow:
            "1px 1px 0px 0px #5FE2D1, 2px 2px 0px 0px #5FE2D1, 3px 3px 0px 0px #5FE2D1, 4px 4px 0px 0px #5FE2D1, 5px 5px 0px 0px #5FE2D1",
          userSelect: "none",
          minW: "200px",
          bg: "white",
          _active: {
            boxShadow: "0px 0px 0px 0px",
            top: "5px",
            left: "5px",
          },
          _focus: {
            boxShadow:
              "1px 1px 0px 0px #5FE2D1, 2px 2px 0px 0px #5FE2D1, 3px 3px 0px 0px #5FE2D1, 4px 4px 0px 0px #5FE2D1, 5px 5px 0px 0px #5FE2D1",
            ringColor: "none",
          },
          _hover: {
            bg: "black",
            color: "white",
            border: "3px solid #FFFFFF",
            boxShadow:
              "1px 1px 0px 0px #FFFFFF, 2px 2px 0px 0px #FFFFFF, 3px 3px 0px 0px #FFFFFF, 4px 4px 0px 0px #FFFFFF, 5px 5px 0px 0px #FFFFFF",
          },
        },
        secondary: {
          m: "15px",
          minW: "235px",
          border: "none",
          borderRadius: "10px",
          boxSizing: "border-box",
          color: "rgb(255, 255, 255)",
          padding: "0.6em 2em",
          position: "relative",
          textAlign: "center",
          textDecoration: "none",
          zIndex: "0",
          fontSize: "1.2rem",
          _after: {
            zIndex: "-1",
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgb(0, 0, 0)",
            left: "0",
            top: "0",
            borderRadius: "10px",
          },
          _before: {
            content: '""',
            bg: "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
            position: "absolute",
            top: "-2px",
            left: "-2px",
            backgroundSize: "400%",
            zIndex: "-1",
            filter: "blur(5px)",
            width: "calc(100% + 4px)",
            height: "calc(100% + 4px)",
            animation: `${buttonKeyframes} 20s linear infinite`,
            transition: "opacity 0.3s ease-in-out",
            borderRadius: "10px",
          },
          _hover: {
            color: "#5FE2D1",
          },
        },
        terciary: {
          m: "10px",
          fontFamily: "Koulen",
          fontSize: "18px",
          letterSpacing: "2px",
          textDecoration: "none",
          color: "#000",
          cursor: "pointer",
          border: "3px solid #5FE2D1",
          padding: "0.25em 0.5em",
          boxShadow:
            "1px 1px 0px 0px #5FE2D1, 2px 2px 0px 0px #5FE2D1, 3px 3px 0px 0px #5FE2D1, 4px 4px 0px 0px #5FE2D1, 5px 5px 0px 0px #5FE2D1",
          userSelect: "none",
          minW: "240px",
          bg: "white",
          _active: {
            boxShadow: "0px 0px 0px 0px",
            top: "5px",
            left: "5px",
          },
          _focus: {
            boxShadow:
              "1px 1px 0px 0px #5FE2D1, 2px 2px 0px 0px #5FE2D1, 3px 3px 0px 0px #5FE2D1, 4px 4px 0px 0px #5FE2D1, 5px 5px 0px 0px #5FE2D1",
            ringColor: "none",
          },
          _hover: {
            bg: "black",
            color: "white",
            border: "3px solid #FFFFFF",
            boxShadow:
              "1px 1px 0px 0px #FFFFFF, 2px 2px 0px 0px #FFFFFF, 3px 3px 0px 0px #FFFFFF, 4px 4px 0px 0px #FFFFFF, 5px 5px 0px 0px #FFFFFF",
          },
        },
        terciarySmall: {
          fontFamily: "Koulen",
          fontSize: "18px",
          letterSpacing: "2px",
          textDecoration: "none",
          color: "#000",
          cursor: "pointer",
          border: "3px solid #5FE2D1",
          padding: "0.25em 0.5em",
          boxShadow:
            "1px 1px 0px 0px #5FE2D1, 2px 2px 0px 0px #5FE2D1, 3px 3px 0px 0px #5FE2D1, 4px 4px 0px 0px #5FE2D1, 5px 5px 0px 0px #5FE2D1",
          userSelect: "none",
          bg: "white",
          minW: "90px",
          _active: {
            boxShadow: "0px 0px 0px 0px",
            top: "5px",
            left: "5px",
          },
          _focus: {
            boxShadow:
              "1px 1px 0px 0px #5FE2D1, 2px 2px 0px 0px #5FE2D1, 3px 3px 0px 0px #5FE2D1, 4px 4px 0px 0px #5FE2D1, 5px 5px 0px 0px #5FE2D1",
            ringColor: "none",
          },
          _hover: {
            bg: "black",
            color: "white",
            border: "3px solid #FFFFFF",
            boxShadow:
              "1px 1px 0px 0px #FFFFFF, 2px 2px 0px 0px #FFFFFF, 3px 3px 0px 0px #FFFFFF, 4px 4px 0px 0px #FFFFFF, 5px 5px 0px 0px #FFFFFF",
          },
        },
      },
    },
  },
});

export default theme;
