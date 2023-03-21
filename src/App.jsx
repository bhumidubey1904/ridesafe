import React from 'react'
import Header from './component/header/Header';
import Nav from './component/nav/Nav'
import AddAccident from './component/addaccident/AddAccident';
import AddGrievance from './component/addgrievance/AddGrievance';

import Footer from './component/footer/Footer';
import Recent from './component/recent/recent';


const App = () => {
  return (
    <div>
        <Header/>
        <Recent/>
        <Nav/>
        <AddAccident/>
        <AddGrievance/>
        <Footer/>
    </div>
  )
}

export default App