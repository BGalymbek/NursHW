import React from 'react'
import Main from './Main'

export default function Test() {
  return (
    <div style={{
      padding: '2rem',
      border: '2px solid #5d8bf4',
      borderRadius: '15px',
      backgroundColor: '#f5f7ff',
      boxShadow: '0 4px 12px rgba(93, 139, 244, 0.15)',
      maxWidth: '800px',
      margin: '2rem auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{
        color: '#2c3e50',
        marginTop: 0,
        borderBottom: '2px solid #e0e7ff',
        paddingBottom: '1rem',
        textAlign: 'center'
      }}>
        This is Test component
      </h1>
      <Main/>
    </div>
  )
}