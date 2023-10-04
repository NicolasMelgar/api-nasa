
import axios from 'axios'
import './App.css'
import CardComponent from './components/CardComponent/CardComponent'
import Header from './components/Header/Header'
import { useState, useEffect } from 'react'
import Spinner from './components/Spinner/Spinner'

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({})
  useEffect(()=>{
    setIsLoading(true);
    // fetch()
    //   .then((response) => response.json())
    //   .then((json)=> console.log(json));

    //ahora con AXIOS..uso json.data para que solo muestre los datos
      axios(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((json)=> setData(json.data));

      setTimeout(() => {
        setIsLoading(false);
      },3000);
      

  }, [])

  return (
    <>
      <div className='App'>   
      <Header/>
      {isLoading ? <Spinner/> : 
      <CardComponent data={data}/>}
      </div>
        
    </>
  )
}


export default App
