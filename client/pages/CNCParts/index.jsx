import Dynamic from 'next/dynamic'
import { getInventoryData } from '../../lib/inventory';
import Link from 'next/link';

export const ROUTE_CNC_PARTS = '/CNCParts/[id]'


export async function getStaticProps() {
    const { inventory } = getInventoryData();
    return { props: { inventory } }
}



const StockItem = ({ ROUTE_CNC_PARTS, id, brandName }) => {
    return(
        <Link href={{ pathname: ROUTE_CNC_PARTS, query: { id: id.toString() } }} as={{ pathname: ROUTE_CNC_PARTS, query: { id: id.toString() } }} >
            <div className="w-1/2 h-20 flex items-center bg-slate-200 hover:cursor-pointer border border-red-500
                        hover:bg-slate-100" >
                <p className='px-3 py-1 text-xl font-light'>{brandName}</p>
            </div>
        </Link>
    )
}


export default function CNCParts({  inventory: { brands }  }) {
    
    
    return (
        <div className='flex flex-col py-20'>
            <div className='my-2 px-3'>
                <h2 className='text-xl font-bold'>CNC Parts</h2>
                <p className="text-sm">Thousands of parts. Trusted brands. Quality assured.</p>
            </div>

            <div className='flex flex-wrap'>
                {
                    brands.map( brand => <StockItem key={brand.id} ROUTE_CNC_PARTS={ROUTE_CNC_PARTS} { ...brand } />)
                }
            </div>
        </div>
    )
}

