import { useState } from "react"
import { Bars3Icon, HomeModernIcon } from "@heroicons/react/24/solid"
import Logo from '@/assets/Logo.png'
import Link from "./link"
import {SelectdPage} from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {
  selectedPage : SelectdPage,
  setSelectedPage : (value : SelectdPage)=> void; 
}


export default function Navbar( {
  selectedPage,
  setSelectedPage
} : Props) {

    const flexBetween = "flex items-center justify-between"
    const isAboveMediaScreen = useMediaQuery("(min-width : 1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  return (
    <nav>
        <div className= {`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className= {`${flexBetween} mx-auto w-5/6`}>
                <div className= {`${flexBetween} before:after:first:`}>
                    {/* left side */}
                   <img alt="logo"  src= {Logo} />
                   {/* right side */}
                    {isAboveMediaScreen? 
                   <div className= {`${flexBetween} w-full`}>
                      <div className= {`${flexBetween} gap-8 text-sm`}>
                          <Link 
                            page="Home"
                            selectedPage= {selectedPage}
                            setSelectedPage={setSelectedPage}
                          />
                          <Link 
                            page="About"
                            selectedPage= {selectedPage}
                            setSelectedPage={setSelectedPage}
                          />
                          <Link 
                            page="Our Classes"
                            selectedPage= {selectedPage}
                            setSelectedPage={setSelectedPage}
                          />
                          <Link 
                            page="Contact"
                            selectedPage= {selectedPage}
                            setSelectedPage={setSelectedPage}
                          />
                      </div>
                      <div className= {`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <button> Become a Memeber  </button>

                      </div>
                   </div> : 
                      <div>
                        <button
                          className=" rounded-full bg-yellow-700 "
                          onClick={()=> setIsMenuToggled(!isMenuToggled)}
                        >
                          <Bars3Icon className="p-1 h-10 w-10 text-white" />
                        </button>
                      </div>
                   }
                </div>
            </div>
            <div>
              
            </div>
        </div>
        
    </nav>
  )
}
