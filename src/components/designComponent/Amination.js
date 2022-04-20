import React, { useEffect, useState } from 'react';
import './Amination.css'

const amination = 'In The Real World Ghost Scares You but in the daemon game Ghost makes you rich'

export const Aminations = () => {

  const [typeAmination, setAmination] = useState('')
  const [delay, setDelay] = useState(5000)

  useEffect(() => {
    const timeout = setTimeout(() => {
        if (typeAmination.length === amination.length) {
          if (delay > 0) {
              setDelay(delay - 100);
          } else {
              setDelay(5000)
              setAmination('');
          }
        } else {
          setAmination(amination.slice(0, typeAmination.length + 1))
        }
    }, 100)

    return () => {
      clearTimeout(timeout);
    }
  
  },[typeAmination, delay]);

  return (
    <div>
        <span>
        <h6 className='text-success text-uppercase blink-cursor'>{typeAmination}
        </h6> 
        </span>{''}
    </div>
  )
}
