import Image from 'next/image'

const cncParts = [
    {
        part: 'Circuit Boards',
        icon: '/images/about-circuit.jpeg',
    },
    {
        part: 'Drivers',
        icon: '/images/drivers.jpeg'
    },
    {
        part: 'Power Supplies',
        icon: '/images/power-supply.jpeg',
        classes: 'object-top object-center object-cover rounded-full'
    },
]

const images = [
    {
        image:  'https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-fast-customer-services-wanicon-lineal-wanicon.png',
        imageInfo: 'Fast Service'
    },
    {
        image:     'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-quality-business-kiranshastry-lineal-kiranshastry-2.png',
        imageInfo: 'Hight Quality'
    },
    {
        image:  'https://img.icons8.com/external-outline-02-chattapat-/64/000000/external-warranty-black-friday-outline-02-chattapat-.png',
        imageInfo: 'Full Warranty'
    }

]

const OverviewImages = ({ image, imageInfo }) => (
    <div className='mx-5
                    sm:mx-6'>
        <div className='flex justify-center  shadow-md  shadow-red-500 p-2 rounded-full mx-2'>
            <Image priority src={image} width={64} height={64} alt='quality, fast service, full warranty' />
        </div>
        <p className='font-light text-sm text-center py-2
                    sm:text-md '>{imageInfo}</p>
    </div>
)


const Overview = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full my-28
                        sm:pb-0 sm:flex-row sm:my-32
                        md:my-40">
            <div className='flex flex-wrap items-center my-6 w-full justify-around px-5 max-w-sm
                            sm:flex-row sm:flex-wrap sm:w-1/2 sm:max-w-md
                            md:w-3/5' >
                <div className='flex flex-col space-y-4 py-5
                                '>
                    <p className="text-2xl font-bold text-center text-red-500
                                sm:text-center">
                        Thousands of CNC Parts from Trusted Brands.
                    </p>
                    <p className='text-center text-sm text-slate-600
                                sm:text-md sm:font-light'
                    >
                        Fanuc, GE, Giddings & Lewis, Allen Bradley,
                        General Numerics, Okuma, Cincinnati Milacron,  
                        Reliance, Osai, Siemens, Gettys, Inland, Lucas
                        and many other CNC brands.
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-center my-6 
                            sm:w-1/2 sm:max-w-md
                            md:w-2/5'>
                <div className='flex flex-wrap justify-center 
                                '>
                    {images.map(({ image, imageInfo }) => (
                        <OverviewImages 
                            key={imageInfo}
                            image={image}
                            imageInfo={imageInfo}
                        />
                    ))}
                </div>
                
            </div>
        </div>
    )
}


const AboutUs = () => {
    return(
        <div id='AboutUs' className='flex justify-center w-full relative px-3 py-28
                                    sm:px-24 sm:w-full sm:my-5
                                    md:py-52
                                    lg:px-40'>
            <Image
                priority
                className='object-cover object-bottom'
                src='/images/about-circuit.jpeg'
                layout='fill'
                alt='circuit boart background'
                
            />
            <div className='relative bg-slate-700/90 py-7 rounded-lg space-y-3
                            sm:rounded-sm sm:px-6
                            md:max-w-lg
                            lg:px-14' >
                <p className='text-amber-50 text-2xl font-extrabold text-center
                                sm:text-3xl
                                lg:text-4xl'>
                    About Us at Cooke CNC
                </p>
                <div className='flex flex-wrap justify-center py-4 items-center w-full 
                                md:justify-start' >
                    <Image 
                        priority
                        src={'https://img.icons8.com/external-flat-icons-inmotus-design/77/000000/external-gears-intellectual-robots-flat-icons-inmotus-design.png'} 
                        height={77}
                        width={77} 
                        alt={''} />

                    <p className='text-zinc-50 text-sm px-5 py-2 font-light w-2/3
                                sm:text-md sm:text-left 
                                '>
                            Cooke CNC Service was established by former
                        Factory Engineers.  With over 40 years in the CNC
                        Machine Tool Business we have the experience to
                        supply quality products and superior service to our
                        customers.
                    </p>
                </div>

                <div className='flex flex-wrap justify-center py-4 items-center w-full 
                                md:flex-row-reverse' >
                    <Image 
                        priority
                        src={'https://img.icons8.com/carbon-copy/100/ECF0F1/around-the-globe.png'} 
                        height={77}
                        width={77} 
                        alt={''} />

                    <p className='text-zinc-50 text-sm px-5 py-2 font-light w-2/3
                                sm:text-md sm:text-left 
                                '>
                        Our company provides CNC Parts and Service
                        support for CNC Machine Tool Systems as well as
                        Repair Centers Worldwide.
                    </p>
                </div>

                <div className='flex flex-wrap justify-center py-4 items-center w-full 
                                md:justify-start' >
                    <Image 
                        priority
                        src={'https://img.icons8.com/external-vectorslab-detailed-outline-vectorslab/68/FFFFFF/external-Microchip-machine-learning-vectorslab-detailed-outline-vectorslab.png'} 
                        height={77}
                        width={77} 
                        alt={''} />

                    <p className='text-zinc-50 text-sm px-5 py-2 font-light w-2/3
                                sm:text-md sm:text-left 
                                '>
                        Thousands of CNC Circuit Boards, Power Supplies
                        and Drives are in stock at our facilities ready to be
                        shipped at a moments notice.
                    </p>
                </div>
            </div>
        </div>
    );
}

// https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/000000/external-Microchip-machine-learning-vectorslab-glyph-vectorslab.png


export default function Main() {
    return (
        <div>
            <Overview />
            <AboutUs />
            
        </div>
    )
}

{/* <div className="flex flex-wrap w-full justify-center
sm:flex-row sm:space-y-0 sm:py-24 sm:w-1/2">
{cncParts.map(({ part, icon }) => (
<div key={part} className={`flex flex-col items-center p-5 relative mx-6
                    `}>
<div className='flex flex-wrap justify-center items-center rounded-full shadow-xl my-10 w-16
            '>
<Image 
    priority
    className={'object-center object-cover rounded-full'}
    layout='fill'
    src={icon}
    alt={part}
/>
</div>
<p className='text-xs py-1 absolute bottom-0 font-semibold w-full text-center z-40 text-red-600 bg-neutral-50 rounded-md shadow-md
            '>
{part}
</p>
</div>
))}

</div> */}