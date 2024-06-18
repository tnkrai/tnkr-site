import ThemeContext, { Theme } from "@contexts/Theme"
import Image from "next/image"
import { useContext } from "react"

const Navbar = () => {
  const localTheme = useContext(ThemeContext);
  return(
    <div className="w-full flex p-6 justify-center gap-7 mb-20">
      <button onClick={() => localTheme?.setTheme(Theme.Light)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`w-4 h-4 shrink-0 inline-block ${localTheme?.theme === Theme.Light ? "opacity-1 fill-black " : "opacity-35 fill-white"}`} focusable="false">
          <g color="white">
            <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z">
            </path>
          </g>
        </svg>
      </button>
      <button onClick={() => localTheme?.setTheme(Theme.Dark)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 266"  className={`w-4 h-4 shrink-0 inline-block ${localTheme?.theme === Theme.Dark ? "opacity-1 fill-white " : "opacity-35 fill-black"}`} focusable="false">
          <g color="white">
            <path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z">

            </path>
          </g>
        </svg>
      </button>
    </div>
  )
}

export default Navbar