import { useState } from 'react'
import Navbar from '@/scenes/navbar'
import {SelectdPage} from '@/shared/types'


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectdPage>(SelectdPage.Home);


  return (
    <>
      <div  className='app'>

         <Navbar
             selectedPage = {selectedPage}
             setSelectedPage = {setSelectedPage}
         />
      </div>
    
    </>
  )
}

export default App
