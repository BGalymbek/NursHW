import React, { useContext } from 'react'
import { TextContext } from './TextProvider'
import Main2 from './Main2'

export default function Main() {
  let { text, san } = useContext(TextContext)
  return (
    <div>
      <h2>This is Main component</h2>
      <p>{text}</p>
      <p>{san}</p>
      <Main2/>
    </div>
  )
}
