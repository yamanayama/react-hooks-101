import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'


const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(()=>{
    console.log('compornent DidMount')
  })
  
  useEffect(()=>{
    console.log('初回レンダリングのみ')
  },[])
  
  
  useEffect(()=>{
    console.log('nameの変更があった場合のみ　collback')
  },[name])

  return (
    <div>
     <p>現在の{name}は{price}</p>
     <button onClick={()=> setState({...state, price: price + 1})}>plus</button>
     <button onClick={() => setState(props)}>reset</button>
     <input value={name} onChange={e => setState({...state, name:e.target.value})}/>
    </div>
  );
}

App.defaultProps = {
  name: "",
  price: 10000
}

export default App;
