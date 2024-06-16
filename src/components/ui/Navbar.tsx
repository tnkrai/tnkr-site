import Image from "next/image"

// const headerVariants = cva({
//   variants: {
//     "light-mode": ["opcaity-10"],
//     "dark-mode": ["opacity-100"]
//   }
// })

const Navbar = () => {
  return(
    <div className="w-full flex bg-[rgba(2,2,2,1)] p-6 justify-center gap-7 fixed">
    <button>
      <Image 
        src="./icons/sun.svg"
        alt="light mode icon"
        width={16}
        height={16}
        className="opacity-35"
      />
    </button>
      <button>
        <Image 
          src="./icons/moon.svg"
          alt="dark mode icon"
          width={16}
          height={16}
        />
      </button>
    </div>
  )
}

export default Navbar