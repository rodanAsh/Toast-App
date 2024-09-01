import React, { useRef } from 'react'
import ToastContainer from './components/ToastContainer/ToastContainer'
import './App.css'

const App = () => {
  const toastRef = useRef()
  const showToast = (message,type) => {
    toastRef.current.addToast(message,type)
  }
  return (
    <div className='app'>

      <button className='success-btn' onClick={() => showToast("This is a Success toast !","success")}>Success</button>
      <button className='info-btn' onClick={() => showToast("This is a Info toast !","info")}>Info</button>
      <button className='warning-btn' onClick={() => showToast("This is a Warning toast !","warning")}>Warning</button>
      <button className='error-btn' onClick={() => showToast("This is a Error toast !","error")}>Error</button>

      <ToastContainer ref={toastRef} />
    </div>
  )
}

export default App