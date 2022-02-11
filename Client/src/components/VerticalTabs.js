import React from 'react'
import { useNavigate } from 'react-router-dom'

const VerticalTabs = () => {
  const Navigate = useNavigate()
  return (
    <div className='vertical-tabs' style={{ height: window.location.pathname === '/orders' ? 'calc(100vh - 50px)' : 'calc(100vh - 110px)'}}>
      <div
        onClick={() => Navigate('/page1')}
        className={`tabs ${window.location.pathname === '/page1' ? 'active' : ''}`}
      >{'SEATS'.split('').map((character => <h2 key={Math.random()}>{character}</h2>))}
      </div>
      <div
        onClick={() => Navigate('/orders')}
        className={`tabs ${window.location.pathname === '/orders' ? 'active' : ''}`}
      >{'ORDERS'.split('').map((character => <h2 key={Math.random()}>{character}</h2>))}
      </div>
    </div>
  )
}

export default VerticalTabs
