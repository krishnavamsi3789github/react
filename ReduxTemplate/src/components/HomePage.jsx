import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ListBackeryItems from './Backery/ListBackeryItems';
import OrderBackery from './Backery/OrderBackery';
import CartBackery from './Backery/CartBackery';
import RootLayout from './RootLayout';

const HomePage = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<RootLayout />} >
            <Route path='LBI' element={<ListBackeryItems />} />
            <Route path='OB' element={<OrderBackery />} />
            <Route path='CB' element={<CartBackery />} />
            
            {/* <Route path='contacts' element={<ContactLayout />} >
              <Route path='info' element={<ContactInfo />} />
              <Route path='form' element={<ContactForm />} />
            </Route> */}
          </Route>
      )
    )
  return (
    <div className='container'>
      HomePage Component
      <RouterProvider router={router}/>
    </div>
  )
}

export default HomePage
