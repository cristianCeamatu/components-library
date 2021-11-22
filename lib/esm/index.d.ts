declare const SayHello: ({ name }: {
    name: string;
}) => JSX.Element;
export default SayHello;
export { ThemeProvider } from 'styled-components';
export { default as createTheme } from './theme';
export * from './Components/Button/Button';
