import { useRouter } from 'next/router'
import Link from 'next/link'
import { getItemData, getInventoryData } from "../../../lib/inventory"

const ROUTE_CNC_CONFIGS = '/CNCParts/[id]/[config]'

export async function getStaticProps({ params }) {
    const itemData = getItemData(params.id)
    
    return {
        props: {
            inventory: itemData[0]
        }
    }
}


export async function getStaticPaths() {
    const { inventory } = getInventoryData()
    

    const paths = inventory.brands.map( brand => {
        return {
            params: {
                id: brand.id.toString()
            }
        }
    })
    return {
        paths, fallback: false
    }
}

const ConfigInfo = ({ config, id, ROUTE_CNC_CONFIGS  }) => {
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

export default function Item({ inventory: { brandName, id, brandConfig } }) {
    const router = useRouter()

    return(
        <div className='py-40 relative'>
            <div className='absolute top-24 left-2'>
                <p onClick={() => router.back()} className='text-xs cursor-pointer text-gray-600 hover:text-gray-800'>Back to Brands</p>
            </div>
            <p className='px-3 py-1 text-xl font-semibold'>{brandName || null}</p>
            <div className='py-2'>
                <p className='px-7 text-lg'>Configurations: </p>
                {brandConfig.map((conf) => (
                    <ConfigInfo key={conf.config} ROUTE_CNC_CONFIGS={ROUTE_CNC_CONFIGS} id={id} {...conf} />
                ))}
            </div>
        </div>
    )
}