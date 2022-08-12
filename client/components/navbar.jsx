import Link from 'next/link'
import { useState } from 'react'
import { Collapse } from 'react-collapse'

const navigationLinks = [
    {
        to: '/',
        linkName: 'Home'
    },
    {
        to: '/CNC-Parts',
        linkName: 'CNC Parts'
    },
    {
        to: '/AboutUs',
        linkName: 'About Us'
    },
    {
        to: '/ContactUs',
        linkName: 'Contact Us'
    },

]

const NavLink = ({ to, children } )=> {
    return (
        <Link href={to}>{ children }</Link>
    );
}

const MobileNav = ({open, setOpen}) => {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <dev className="flex">
                <Link href='/'>
                    <p className="cursor-pointer text-lg">LOGO</p>
                </Link>

                <div className="flex">
                    {
                        navigationLinks.map(({ to, linkName }, i) => (
                            <NavLink key={i} to={to}>
                                <p className='cursor-pointer' onClick={() => setTimeout(open => setOpen(!open), 100)}>{linkName}</p>
                            </NavLink>
                        ))
                    }
                </div>
                
            </dev>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen ] = useState(false)
    return (
        <nav className='flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center'>
            <MobileNav open={open} setOpen={open} />
            <Link href='/'>
                <p className="cursor-pointer w-3/12 flex items-center text-lg">LOGO</p>
            </Link>

            <div className='w-9/12 flex justify-end items-center'>
                <div className="z-50 flex relative w-8 h-10 flex-col justify-around items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-[2px] w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-[2px] w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-[2px] w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className='hidden md:flex md:space-x-7'>
                    {
                        navigationLinks.map(({to, linkName}, i) => (
                            <NavLink key={i} to={to}>
                                <p className='cursor-pointer'>{linkName}</p>
                            </NavLink>
                        ))
                    }
                </div>

            </div>

    

        </nav>
    )
}