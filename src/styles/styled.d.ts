import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        basicWidth: string

        color: {
            main: string
            yellowButton: string
            sub: string
        }
    }
}
