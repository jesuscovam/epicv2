import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../global.css'
import Navbar from '../src/Navbar'

const theme = {
  colors: {
    primary: {
      main: '#3e51ad',
      light: '#74a1d8',
      dark: '#262c6a'
    },
    secondary: {
      main: '#ff9e73',
      light: '#f6908b',
      dark: '#f9705e',

    },
    paper: {
      main: '#ebebeb',
      light: '#fffbf9'
    },
    black: '#000'
  },
  typo: {
    header: 'Paytone One',
    body: 'Roboto'
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}