import React, { useContext } from 'react'
import { TextContext } from './TextProvider'

export default function Main() {
  let { secret, toggleNext } = useContext(TextContext)
  return (
    <div style={{ 
      padding: '2rem',
      border: '2px solid #4a7c59',
      borderRadius: '15px',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '2rem auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h3 style={{
        color: '#2c3e50',
        marginTop: 0,
        borderBottom: '2px solid #eaeaea',
        paddingBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span>This is Main component</span>
        <span role="img" aria-label="detective">🕵️</span>
      </h3>
      
      <p style={{ 
        fontStyle: 'italic',
        fontSize: '1.2rem',
        color: '#4a7c59',
        backgroundColor: '#eaf4f4',
        padding: '1rem',
        borderRadius: '8px',
        borderLeft: '4px solid #4a7c59'
      }}>
        {secret}
      </p>
      
      <select 
        onChange={(e) => toggleNext(e.target.value)}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          border: '2px solid #4a7c59',
          backgroundColor: 'white',
          color: '#2c3e50',
          fontSize: '1rem',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.3s ease',
          width: '100%',
          maxWidth: '200px'
        }}
      >
        <option value="kk">Қазақша</option>
        <option value="ru">Орысша</option>
        <option value="en">Ағылшынша</option>
      </select>
    </div>
  )
}