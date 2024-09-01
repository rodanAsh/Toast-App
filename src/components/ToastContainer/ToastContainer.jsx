import React, { useImperativeHandle, useState, forwardRef } from 'react'
import './ToastContainer.css'
import Toast from '../Toast/Toast'

const ToastContainer = forwardRef((props,ref) => {

    const [toasts,setToasts] = useState([])

    const addToast= (message,type) => {
      let id = Date.now();
      setToasts((prev) => [...prev,{id,message,type}])

      setTimeout(() => (
        setToasts((prev) => prev.filter(t => t.id !== id))
      ),5000)
    }

    useImperativeHandle(ref,() => ({
      addToast
    }));

  return (
    <div className='toast-container'>
        {toasts.map((item,index) => (
            <Toast 
              key={index} 
              message={item.message} 
              type={item.type} 
              onClose={() => setToasts((prev) => prev.filter(t => t.id !== item.id))} 
            />
        ))}
    </div>
  )
});

ToastContainer.displayName = "ToastContainer"

export default ToastContainer