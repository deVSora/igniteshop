import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
      principal: string;
      light: string;
      background: string;
      elements: string;
      text: string;
      title: string;
      white: string;
  }
}