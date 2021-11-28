import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom/'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';

import { lightTheme, darkTheme } from './components/Theme/Theme';
import Home from './pages/Home'
import MainAppBar from './components/MainAppbar';

import { API_KEY } from './API_KEY'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = (darkMode ? darkTheme : lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <MainAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <button onClick={() => console.log(API_KEY)}>api key logger</button>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </ThemeProvider>
  )
}
