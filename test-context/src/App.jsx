import React from 'react'
import TextProvider from './components/TextProvider'
import Test from './components/Test'

export default function App() {
  return (
    <TextProvider>
      <div style={{ 
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        padding: '2rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#2c3e50',
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            <span role="img" aria-label="sunglasses">🕶️</span>
            <span>HomeWork useContext</span>
          </h1>
          
          <Test/>
          
          <p style={{
            marginTop: '2rem',
            color: '#7f8c8d',
            fontSize: '0.9rem'
          }}>
            Secret language selection app © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </TextProvider>
  )
}