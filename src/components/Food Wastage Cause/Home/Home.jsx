import React from 'react'
import Container1 from '../Container1/Container1'
import Header from '../Header/Header'
import Navbar1 from '../Navbar1/Navbar1'
import Navbar2 from '../Navbar2/Navbar2'
import WhyIHappen from '../WhyItHappen/WhyIHappen'

function Home() {
  return (
    <div>
        <Navbar1/>
        <Navbar2/>
        <Header/>
        <Container1/>
        <WhyIHappen/>
    </div>
  )
}

export default Home