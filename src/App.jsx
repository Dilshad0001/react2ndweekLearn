import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './components/Sample'
import Usereducer from './components/Usereducer'
import Usereducer_2 from './components/Usereducer_2'
import Fetch_sample from './components/Fetch_sample'
import Axios_fetch from './components/Axios_fetch'
import Axios_post from './components/Axios_post'
import Axios_post_2 from './components/Axios_post_2'
  import Counter_sample from '../src/components/Counter_sample'
import Parent from './components/Parent'
import Component_1 from './components/Component_1'
import Context from './context/Context'
// import Usecallback from './components/Usecallback'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Parent_router from './auth/Parent_router'
import Dynamic_routing from '../Pages/Dynamic_routing'
import Dynamic_parent_2 from '../Page_2/Dynamic_parent_2'

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
{/* <h1>hello world</h1> */}
{/* <Sample/> */}
{/* <Usereducer/> */}
{/* <Usereducer_2/> */}
{/* <Fetch_sample/> */}
{/* <Axios_fetch/> */}
{/* <Axios_post/> */}
{/* <Axios_post_2/> */}
{/* <Counter_sample/> */}
{/* <Usecallback/> */}
{/* <Parent/> */}
{/* <Component_1/> */}
{/* <Context/> */}
{/* <Parent_router/> */}
{/* <Dynamic_routing/> */}
<Dynamic_parent_2/>
    </>




  )
}

export default App
