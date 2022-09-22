declare module 'brandingColors' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            secundary: string,
            tertiary: string,
            success: string,
            error: string,
            alert: string,
            info: string,
            text: string,
            textDesable: string,
            light: string,
            dark: string,
            grey: string,
            desable: string
        },
        font: {
            fontFamily: string,
            weight: {
                tiny: number,
                regular: number,
                bold: number
            }
        },
        sizes: {
            '12px': '0.75rem',
            '14px': '0.875rem',
            '16px': '1rem',
            '18px': '1.125rem',
            '20px': '1.25rem',
            '24px': '1.5rem',
            '28px': '1.75rem',
            '32px': '2rem',
            '40px': '2.5rem',
            '48px': '3rem',
            '56px': '3.5rem',
            '64px': '4rem'
        }
    }
}