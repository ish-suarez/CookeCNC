import Image from 'next/image'
import Link from 'next/link'

const headerInfo = [
    {
        icon: 'https://img.icons8.com/carbon-copy/65/000000/service.png',
        information: 'Field Service'
    },
    {
        icon: 'https://img.icons8.com/ios/48/000000/truck.png',
        information: 'Same day Shipping'
    },
    {
        icon: 'https://img.icons8.com/carbon-copy/100/000000/warranty.png',
        information: 'One Year Warranty on Most Parts',
    },
]


const HeaderInfo = ({icon, information}) => (
    <div className='flex items-center '>
        <Image
            className='rounded-md'
            priority
            src={icon}
            width={38}
            height={38}
            alt={information}
        />
        <p className='text-xs font-bold ml-2 text-zinc-700
                        lg:text-sm'>
            {information}
        </p>
    </div>
)

export default function Header() {
    
    return(
        <div className="relative pt-40 pb-12 z-0 flex items-center justify-center
                        sm:justify-start sm:pt-48
                        md:pt-60 md:pb-20 md:h-[40rem]">
            <Image
                priority
                layout="fill"
                className="object-left object-cover pointer-events-none"
                src='/images/warehouse.jpg'
                alt='warehouse'
            />
            <div className="relative flex flex-col space-y-3 w-full px-4 py-6 z-1 bg-white/60  shadow-lg
                            sm:px-12 sm:w-3/5 sm:rounded-r-lg
                            md:w-7/12 md:max-w-lg
                            lg:px-18">
                <div className=''>
                    <p className='text-3xl font-extrabold mb-2 text-red-600
                                    lg:text-4xl'>
                        CNC Parts
                    </p>
                    <div className=' font-extrabold text-sm flex flex-col space-y-2 '>
                        {
                            headerInfo.map(({ icon, information }) => (
                                <HeaderInfo 
                                    key={information} 
                                    icon={icon} 
                                    information={information} 
                                />
                            ))
                        }
                    </div>
                </div>
                <Link href={'/#ContactUs'} as={'/#ContactUs'}>
                    <button className='bg-red-600 transition-all duration-300 ease-in-out text-white font-semibold text-lg py-1 w-1/2 rounded-md shadow-lg
                                        hover:bg-red-500 hover:hover:scale-105 hover:shadow-xl'>
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    )
}