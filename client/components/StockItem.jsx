import Link from 'next/link';

export default function StockItem({ ROUTE_CNC_PARTS, id, brandName }) {
    return(
        <Link href={{ pathname: ROUTE_CNC_PARTS, query: { id: id.toString() } }} as={{ pathname: ROUTE_CNC_PARTS, query: { id: id.toString() } }} >
            <div className="w-1/2 h-20 flex items-center bg-slate-200 hover:cursor-pointer border border-red-500
                        hover:bg-slate-100" >
                <p className='px-3 py-1 text-xl font-light'>{brandName}</p>
            </div>
        </Link>
    )
}