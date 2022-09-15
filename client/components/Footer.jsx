import Link from 'next/link'
import dynamic from "next/dynamic"
const Signature = dynamic(() => import('./Signature'), {ssr: false});

const footerInfo = {
        cncSupport: [
            {
                blogWebsite: 'https://www.cnczone.com/',
                blogName: 'CNC Zone'
            },
            {
                blogWebsite: 'https://www.practicalmachinist.com/',
                blogName: 'Practical Machinist'
            },
            {
                blogWebsite: 'https://cncalarms.com/',
                blogName: 'CNC Alarms'
            },
            {
                blogWebsite: '/MachineToolBuilders',
                blogName: 'Machine Tool Builders'
            }
        ],
        contactInfo: {
            phoneNumber1: '281-589-7158 ',
            phoneNumber2: '281-589-7193',
            faxNumber: '866-711-4434',
            emailAddress: 'cookecnc@hotmail.com'
        },
        additionalResources: {
            iconSource: 'icons8.com',
            iconWebsite: 'https://icons8.com'
        }
    
    }

    const { phoneNumber1, phoneNumber2, faxNumber, emailAddress } = footerInfo.contactInfo

    const { iconSource, iconWebsite } = footerInfo.additionalResources


const BlogWebsites = ({blogName, blogWebsite}) => (
    <Link href={blogWebsite} as={blogWebsite} target={`_blank`}>
        <a 
            href={blogWebsite} 
            target='_blank' 
            rel='noreferrer' 
            className='hover:text-red-400 transition ease-in-out text-sm hover:underline cursor-pointer font-medium w-fit text-zinc-700 px-3'
        >
            {blogName}
        </a>
    </Link>
)

export default function Footer() {
    return (
        <footer  id="ContactUs"  className="py-24 flex flex-col space-y-20 absolute top-100 w-full
                                            lg:flex-row lg:flex-wrap lg:justify-center">
            <section className='w-full 
                                                '>
                <p className='flex flex-col font-bold text-xl text-zinc-900 border-b-2 border-red-600 px-3 w-full
                            lg:px-20'>
                    Contact Us<span className='text-sm'> We Speak Spanish</span>
                </p>
                <div className="w-full flex flex-col
                                md:flex-row md:justify-between
                                lg:px-20">
                    <div className='flex flex-col w-auto font-medium text-zinc-700 px-5 space-y-3 py-3'>
                        <div className=''>
                            <p className='text-sm border-b-2 border-red-400 w-32'>Phone Numbers</p>
                            <div className='flex flex-col py-2'>
                                <a className='hover:text-red-400 transition ease-in-out text-sm hover:underline w-fit' href={`tel:${phoneNumber1}`}>{phoneNumber1}</a>
                                <a className='hover:text-red-400 transition ease-in-out text-sm hover:underline w-fit' href={`tel:${phoneNumber2}`}>{phoneNumber2}</a>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm border-b-2 border-red-400 w-32'>Fax Number</p>
                            <p className='text-sm w-fit py-2'>{faxNumber}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm border-b-2 border-red-400 w-32'>Email Address</p>
                            <a className='hover:text-red-400 transition ease-in-out text-sm hover:underline w-fit py-2' href={`mailto:${emailAddress}`} >{emailAddress}</a>
                        </div>
                    </div>
                    <div className="flex justify-center self-center py-10 space-x-4
                                    ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.504980404659!2d-95.7113881845008!3d29.791952181974892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d9d90eebee77%3A0x2bd92e06f1034802!2sCooke%20CNC%20Service!5e0!3m2!1sen!2sus!4v1662397030924!5m2!1sen!2sus"
                            width="250" 
                            height="250" 
                            style={{border: '0'}}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div className='w-1/5 '>
                            <p className='text-sm font-semibold text-zinc-700'>Our Address</p>
                            <address className='text-xs font-light'>Cooke CNC Service 19408 Park Row Blvd. Suite 400 Houston, Texas 77084 USA</address>

                        </div>
                    </div>

                </div>
            </section>

            <section className="w-full
                                lg:w-1/2">
                <p className="font-bold text-xl text-zinc-900 border-b-2 border-red-600 w-full px-3
                                lg:px-20">CNC Support Blogs</p>
                <div className='flex flex-col px-5 py-3 space-y-1 
                                lg:px-20'>
                    {
                        footerInfo.cncSupport.map(({ blogName, blogWebsite }) =>  <BlogWebsites key={blogName} blogName={blogName} blogWebsite={blogWebsite} /> )
                    }
                </div>
            </section>

            <section className="w-full
                                lg:w-1/2">
                <p className="flex flex-col font-bold text-xl text-zinc-900 border-b-2 border-red-600 px-3 w-full
                                lg:px-20">
                    Additional Resources
                </p> 
                <div className="flex flex-col px-5 py-3 space-y-1
                                lg:px-20">
                    <Link 
                        className="" 
                        href={iconWebsite} 
                        target='_blank'
                        rel="noreferrer"
                    >
                        <p className='hover:text-red-400 transition ease-in-out text-sm hover:underline cursor-pointer font-medium text-zinc-700  w-fit px-3'>Icons by {iconSource}</p>
                    </Link>
                </div>
            </section>
            <Signature />
        </footer>
    )
}