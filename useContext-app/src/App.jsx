import React, { useState } from 'react'
import './App.css'
import Test from './components/Test'
import TextProvider from './components/TextProvider'

export default function App() {
  return (
    <TextProvider>
      <Test/>  
    </TextProvider>
  )
}
