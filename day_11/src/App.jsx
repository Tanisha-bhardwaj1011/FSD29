import React, {useEffect,useState } from 'react'

import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const Home =()=>{return(<div>Home</div>)}
const About =()=>{return(<div>About</div>)}
const Contact =()=>{return(<div>Contact</div>)}

const App = () => {
  const [products,setProducts]= useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data)=>setProducts(data.products));

  },[])
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path ="/" element={<Home/>}></Route>
          <Route path ="/about" element={<About/>}></Route>
          <Route path ="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      <Product products={products}/>
      <Footer />
    </div>
  )
}

export default App