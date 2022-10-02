import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// import styles from '../../../styles/[config].module.css'
import { useState } from "react";
import { getInventoryData, getConfigsByIdAndConfig } from "../../../lib/inventory";

const ConfigOnHandStock = dynamic(() => import('../../../components/ConfigOnHandStock'), {ssr: false})

// need to change
export async function getStaticProps({ params }) {
    const stockItems = getConfigsByIdAndConfig(params.id, params.config)

    return{
        props: {
            inventory: stockItems[0]
        }
    }
}

export async function getStaticPaths() {
    const { inventory } = getInventoryData()

    const paths = inventory.brands.map(brand => {
        return brand.brandConfig.map(conf => {
            return {
                params: {
                    id: brand.id.toString(),
                    config: conf.config.toString()
                }
            }
        })
    }).flat()

    return {
        paths, fallback: true
    }
}


export default function Config({ inventory: { brandName, brandConfig } }) {
    const router = useRouter();
    const [partInformationOpen, setPartInformationOpen] = useState({});

    const collapseByDescription = config => {
        setPartInformationOpen((prevState => ({...prevState, [config]: !prevState[config]})));
    }


    return (
        <div className="py-40 relative">
            <div className='absolute top-24 left-2'>
                <p onClick={() => router.back()} className='text-xs cursor-pointer text-gray-600 hover:text-gray-800'>Go Back</p>
            </div>
            <ConfigOnHandStock 
                brandName={brandName} 
                brandConfig={brandConfig} 
                partInformationOpen={partInformationOpen} 
                collapseByDescription={collapseByDescription} 
            />
        </div>
    )
}