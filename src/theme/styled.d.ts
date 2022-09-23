import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      success: string,
      error: string,
      alert: string,
      info: string,
      textGrey: string,
      textDesable: string,
      light: string,
      dark: string,
      grey: string,
      desable: string
    },
    font: {
        weight: {
            tiny: number,
            regular: number,
            bold: number
        }
    },
    sizes: {
        '12px': string,
        '14px': string,
        '16px': string,
        '18px': string,
        '20px': string,
        '24px': string,
        '28px': string,
        '28px': string,
        '32px': string,
        '40px': string,
        '48px': string,
        '56px': string,
        '64px': string
    }
  }
}