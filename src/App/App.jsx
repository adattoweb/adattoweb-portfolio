import './App.css'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Page404 from '../Page404/Page404'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import LoadScreen from '../LoadScreen/LoadScreen'

import Modal from '../Modal/Modal'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


function App() {
  if(window.location.pathname !== '/'){
    window.location.pathname = "/"
    return <Page404></Page404>
  }
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
      <Content isEn={isEn}></Content>
      <Footer isEn={isEn}></Footer>
      <Modal isNeed={isNeed} isEn={isEn}></Modal>
      </>
    )
  }
}

export default App
