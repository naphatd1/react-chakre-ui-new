//redux
import { Provider } from 'react-redux'
import { store } from './redux-toolkit/store.ts'

// import React from 'react'
import ReactDOM from 'react-dom/client'

//css
import { ChakraProvider } from '@chakra-ui/react'
import './global.css'

//route
import { RouterProvider } from 'react-router-dom'
import route from './routes/root.tsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <ChakraProvider>
        <RouterProvider router={route} />
        <Toaster position="bottom-right" />
      </ChakraProvider>
    {/* </React.StrictMode> */}
  </Provider>
)
