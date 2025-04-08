import React, { useContext } from 'react'
import Main from './Main'
import { TextContext } from './TextProvider'

export default function Test() {
  let {mode} = useContext(TextContext)
  return (
    <div className={mode}>
      <h1>This is Test</h1>
      <Main/>
    </div>
  )
}
