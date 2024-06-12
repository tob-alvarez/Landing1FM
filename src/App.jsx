/* eslint-disable react/no-unescaped-entities */
import './App.css'
import Banner from './components/Banner/Banner'
import Comments from './components/Comments/Comments'
import Footer from './components/Footer/Footer'
import Manage from './components/Manage/Manage'
import Navbar from './components/Navbar/Navbar'
import Principal from './components/Principal/Principal'

function App() {

  return (
    <>
      <Navbar/>
      <Principal/>
      <Manage/>
      <Comments/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default App
