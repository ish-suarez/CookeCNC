import Image from 'next/image';
import Collapse from 'react-collapse';


export default function ConfigOnHandStock({brandName, brandConfig, partInformationOpen, collapseByDescription }) {
    return (
        <div className=''>
            <p className="text-xl font-bold text-zinc-700 px-3">{brandName}</p>
            {brandConfig.map((conf, i) => (
                <div key={i}>
                    <p className="px-7 font-light py-1">{conf.config}</p>
                    <div className="px-1
                                    ">
                        {conf.onHandStock.map(({description, catalogNumber, boardNumber, inStock}, i) => (
                            <div 
                                className={` px-2 py-1 cursor-pointer transition ease-in-out duration-200 border-b-2 
                                            hover:cursor-pointer hover:bg-slate-100 hover:border-b-2 hover:border-red-400
                                            sm:px-5`} 
                                key={++i} 
                                onClick={() => collapseByDescription(catalogNumber)}
                            >   
                                <div className="flex justify-between items-center">
                                    <div className='w-full'>
                                        <p className="w-1/2 font-medium py-2 text-zinc-600
                                                    sm:w-3/4">
                                            {description}
                                        </p>
                                        <p className='text-sm font-medium font-mono text-neutral-400'>{catalogNumber}</p>


                                    </div>
                                    {!partInformationOpen[catalogNumber] && <Image  priority className="" src={`https://img.icons8.com/small/16/000000/drag-list-down.png`} height={16} width={16} alt={`dorp down`} /> }   
                                    {partInformationOpen[catalogNumber] &&  <Image  priority className="" src={`https://img.icons8.com/tiny-color/16/000000/delete-sign.png`} height={16} width={16} alt={`dorp down`}/> }
                                </div>
                                <Collapse isOpened={partInformationOpen[catalogNumber]}>
                                    <div className={`transition-[height] ease-in-out duration-500 flex justify-around py-5`}>
                                        <div className="flex flex-col items-center space-y-3 px-2
                                                        sm:w-1/3">
                                            <p>Catalog Number</p>
                                            <p className='font-mono'>{catalogNumber}</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-3 px-2
                                                        sm:w-1/3">
                                            <p>Board Number</p>
                                            <p className='font-mono'>{boardNumber}</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-3 px-2
                                                        sm:w-1/3">
                                            <p>On Hand</p>
                                            <p>{inStock ? <Image priority src={'https://img.icons8.com/emoji/48/000000/check-mark-button-emoji.png'} height={28} width={28} alt={`in stock`} /> : <Image priority src={`https://img.icons8.com/emoji/48/000000/cross-mark-button-emoji.png`} height={28} width={28} alt={`out of stock`} />}</p>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}