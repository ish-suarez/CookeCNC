import Link from 'next/link';

export default function StockItem({ config, id, ROUTE_CNC_CONFIGS  }) {
    return(
        <div className="px-7 
                        hover:cursor-pointer hover:bg-slate-100 hover:border-b-2 hover:border-red-400
                        ">
            <Link href={{ pathname: ROUTE_CNC_CONFIGS, query: { id: id.toString(), config: config.toString() } }} as={{ pathname: ROUTE_CNC_CONFIGS, query: { id: id.toString(), config: config.toString() } }} >
                <p className='px-3 py-1 font-light'>{config}</p>
            </Link>
        </div>
    )
}