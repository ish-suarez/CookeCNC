import Link from 'next/link'
import { useState } from 'react'

const navigationLinks = [
    {
        to: '/#',
        linkName: 'Home'
    },
    {
        to: '/CNCParts',
        linkName: 'CNC Parts'
    },
    {
        to: '/#AboutUs',
        linkName: 'About Us'
    },
    {
        to: '/#ContactUs',
        linkName: 'Contact Us'
    },

]

const NavLink = ({ to, children } )=> {
    return (
        <Link scroll href={to} as={to}>{ children }</Link>
    );
}

const MobileNav = ({ open, setOpen }) => {
    return (
        <div className={`z-20 px-4 py-2 fixed top-0 left-0 w-full bg-red-600 transform ${open ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex flex-col">
                <Link href='/#' as={'/#'}>
                    <div className='cursor-pointer w-9/12 flex flex-col text-xl font-semibold text-white'>
                        <span className="border-b-2">Cooke CNC</span>
                        <span className="text-xs ml-7">Supplying CNC Parts Worldwide</span>
                    </div>
                </Link>

                <div className="flex flex-col ml-4 text-white">
                    {
                        navigationLinks.map(({ to, linkName }, i) => (
                            <NavLink key={linkName} to={to}>
                                <p className='cursor-pointer text-xl font-medium my-4 hover:text-white/40' onClick={() => setTimeout(open => {setOpen(open)}, 100)}>{ linkName }</p>
                            </NavLink>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen ] = useState(false)

    return (
        <nav className='w-full z-40 flex filter drop-shadow-md bg-red-600 px-4 py-4 h-20 items-center
                        md:justify-between'>
            <MobileNav open={open} setOpen={setOpen} />
            <Link href='/'>
                <div className='cursor-pointer w-9/12 flex flex-col text-xl font-semibold text-white
                                sm:w-1/2
                                md:w-2/5'>
                    <span className="border-b-2">Cooke CNC</span>
                    <span className="text-xs ml-7">Supplying CNC Parts Worldwide</span>
                </div>
            </Link>

            <div className='w-3/12 flex justify-end items-center
                            sm:w-1/2 '>
                <div className="z-50 flex relative w-8 h-10 flex-col justify-around items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-[2px] w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-[2px] w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-[2px] w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className='hidden md:flex md:space-x-7'>
                    {
                        navigationLinks.map(({ to, linkName }) => (
                            <NavLink key={linkName} to={to}>
                                <p className='cursor-pointer text-white hover:text-red-300 transition duration-300 ease-in-out '>{linkName}</p>
                            </NavLink>
                        ))
                    }
                </div>
            </div>

    

        </nav>
    )
}