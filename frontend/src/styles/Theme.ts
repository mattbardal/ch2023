import { extendTheme } from '@chakra-ui/react'

export const myTheme = extendTheme ({
  colors: {
    grey: {
      50: '#F7F7F7',
      100: '#E1E1E1',
      200: '#CFCFCF',
      300: '#B1B1B1',
      400: '#9E9E9E',
      500: '#7E7E7E',
      600: '#626262',
      700: '#515151',
      800: '#2E2E2E',
      900: '#212121',
    },
    primaryBright: '#BB90FB',
    primaryDim: '#785CA1',
    secondaryBright: '#20DDCB',
    secondaryDim: '#0F6159',
    boxGradient: 'linear-gradient(45deg, #2E2E2E, #515151)',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'grey.100',
        color: 'black',
      },
    })
  },
  components: {
  },
})