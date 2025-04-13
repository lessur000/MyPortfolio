import { useState } from "react"


const useNav = () => {
    //hamburgerMenu
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return {handleNav, nav, setNav}
}

export default useNav