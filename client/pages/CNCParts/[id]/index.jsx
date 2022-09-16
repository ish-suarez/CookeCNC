import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import { getItemData, getInventoryData } from "../../../lib/inventory"
const ConfigInfo = dynamic(() => import('../../../components/ConfigInfo'), {ssr: false})

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
        paths, fallback: true
    }
}

export default function Item({ inventory: { brandName, id, brandConfig } }) {
    const router = useRouter()

    return(
        <div className='py-40 relative'>
            <div className='absolute top-24 left-2'>
                <p onClick={() => router.back()} className='text-xs cursor-pointer text-gray-600 hover:text-gray-800'>Back to Brands</p>
            </div>
            <p className='px-3 py-1 text-xl font-semibold'>{brandName}</p>
            <div className='py-2'>
                <p className='px-7 text-lg'>Configurations: </p>
                {brandConfig.map((conf) => (
                    <ConfigInfo key={conf.config} ROUTE_CNC_CONFIGS={ROUTE_CNC_CONFIGS} id={id} {...conf} />
                ))}
            </div>
        </div>
    )
}