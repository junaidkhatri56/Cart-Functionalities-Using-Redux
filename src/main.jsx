import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import "./index.css";
import Products from './pages/Products';
import { Provider } from 'react-redux';
import { store } from './app/store'
import { Checkout } from './pages/Checkout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
)
