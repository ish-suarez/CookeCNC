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
            className='hover:text-red-400 text-ms hover:underline cursor-pointer font-medium w-fit text-zinc-700'
        >
            {blogName}
        </a>
    </Link>
)

export default function Footer() {
    return (
        <footer className="py-10 flex flex-col space-y-5 absolute top-100 w-full
                            sm:">
            <section id="ContactUs" className='w-full 
                                                '>
                <p className='flex flex-col font-bold text-xl text-zinc-900 border-b-2 border-red-600 px-3 w-full'>
                    Contact Us<span className='text-sm'> We Speak Spanish</span>
                </p>
                <div className="w-full flex flex-col">
                    <div className='flex flex-col w-auto font-medium text-zinc-700 px-5 space-y-1 py-3'>
                        <a className='hover:text-red-400 text-sm hover:underline w-fit' href={`tel:${phoneNumber1}`}>{phoneNumber1}</a>
                        <a className='hover:text-red-400 text-sm hover:underline w-fit' href={`tel:${phoneNumber2}`}>{phoneNumber2}</a>
                        <p className='hover:text-red-400 text-sm hover:underline w-fit'>Fax. {faxNumber}</p>

                        <a className='hover:text-red-400 text-sm hover:underline w-fit' href={`mailto:${emailAddress}`} >{emailAddress}</a>
                    </div>
                    <div className="self-center py-10">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.504980404659!2d-95.7113881845008!3d29.791952181974892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d9d90eebee77%3A0x2bd92e06f1034802!2sCooke%20CNC%20Service!5e0!3m2!1sen!2sus!4v1662397030924!5m2!1sen!2sus"
                            width="250" 
                            height="250" 
                            style={{border: '0'}}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>
            </section>

            <section className="w-full
                                ">
                <p className="font-bold text-xl text-zinc-900 border-b-2 border-red-600 w-full px-3">CNC Support Blogs</p>
                <div className='flex flex-col px-5 py-3 space-y-1 '>
                    {
                        footerInfo.cncSupport.map(({ blogName, blogWebsite }) =>  <BlogWebsites key={blogName} blogName={blogName} blogWebsite={blogWebsite} /> )
                    }
                </div>
            </section>

            <section className="w-full
                                ">
                <p className="flex flex-col font-bold text-xl text-zinc-900 border-b-2 border-red-600 px-3 w-full">
                    Additional Resources
                </p> 
                <div className="flex flex-col px-5 py-3 space-y-1">
                    <a 
                        className="hover:text-red-400 text-sm hover:underline cursor-pointer font-medium text-zinc-700  w-fit" 
                        href={iconWebsite} 
                        target='_blank'
                        rel="noreferrer"
                    >
                        Icons by {iconSource}
                    </a>
                </div>
            </section>
            <Signature />
        </footer>
    )
}