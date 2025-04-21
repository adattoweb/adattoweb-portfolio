import './App.css'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import LoadScreen from '../LoadScreen/LoadScreen'

import Modal from '../Modal/Modal'
import { createContext, useContext, useState, useEffect } from 'react'

export const ChangePageContext = createContext()

function App() {
  const [isEn, setIsEn] = useState(false)
  const [isNeed, setIsNeed] = useState(false)
  const [currentPage, setCurrentPage] = useState('Main')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {setIsLoading(false)}, 2000)
    return () => clearTimeout(timer)
  }, [])

  if(isLoading) {
    return <LoadScreen></LoadScreen>
  } else if(isNeed === true){
    return <Modal isEn={isEn} 
    onBurgerClick={() => {
      setIsNeed(!isNeed)
    }} 
    isNeed={isNeed} 
    changePage={() => {
      if(currentPage === 'Main') setCurrentPage('Portfolio')
      else setCurrentPage('Main')
      setIsNeed(false)
    }} 
    currentPage={currentPage}
    changeLang = {() => {
      setIsEn(!isEn);
      console.log(isEn)
    }}
    ></Modal>
  } else if(currentPage === "Portfolio"){
    return (
      <>
        <Header onBurgerClick={() => {
          setIsNeed(!isNeed)
        }}></Header>
        <Portfolio isEn={isEn}></Portfolio> 
        <Footer isEn={isEn}></Footer>
        <Modal isNeed={isNeed}></Modal>
      </>
    )
  } else {
    return (
      <>
      <Header onBurgerClick={() => {
        setIsNeed(!isNeed)
      }}></Header>
      <ChangePageContext.Provider value = {{setCurrentPage}}>
        <Content isEn={isEn}></Content>
      </ChangePageContext.Provider>
      <Footer isEn={isEn}></Footer>
      <Modal isNeed={isNeed} isEn={isEn}></Modal>
      </>
    )
  }
}


export default App
