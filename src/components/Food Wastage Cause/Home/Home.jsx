import React from 'react'
import Container1 from '../Container1/Container1'
import Header from '../Header/Header'
import Navbar1 from '../Navbar1/Navbar1'
import Navbar2 from '../Navbar2/Navbar2'
import WhyIHappen from '../WhyItHappen/WhyIHappen'
import Container2 from '../Container2/Container2'
import { Container3 } from '../Container3/Container3'

function Home() {
  return (
    <div>
        {/* <Navbar1/>
        <Navbar2/> */}
        <Header/>
        <Container1/>
        <WhyIHappen/>
        <Container2/>
        <Container3/>
    </div>
  )
}

export default Home