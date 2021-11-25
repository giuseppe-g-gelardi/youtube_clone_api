import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom/'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';


import { lightTheme, darkTheme } from './components/Theme/Theme';

import GetTest from './components/GetTest'
import NewComment from './components/NewComment'
import Home from './pages/Home'
import MainAppBar from './components/MainAppbar';
// import NewReply from './components/NewReply'

export default function App() {


  const [darkMode, setDarkMode] = useState(false)
  const theme = (darkMode ? darkTheme : lightTheme)


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <MainAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      {/* <Home />
      <GetTest />
      <NewComment /> */}
      {/* <NewReply /> */}




    </ThemeProvider>
  )
}
