const inventoryData = require('../inv.json')

export function getInventoryData() {
    // Potential sorting of inventory items
    const inventory = inventoryData.inventory;
    
    return {
        inventory
    }
}

export function getConfigsByIdAndConfig(id, config) {
    const stockItems = inventoryData.inventory.brands.filter( brand => brand.id.toString() === id.toString())
    const stockConfig = stockItems.map(brand => {
        return { ...brand, brandConfig: brand.brandConfig.filter(conf => conf.config.toString() === config.toString()) }
    }).flat()


    return {
        ...stockConfig
    }
}

export function getItemData(id) {
    const stockItems = inventoryData.inventory.brands.filter( brand => brand.id.toString() === id.toString())
    return {
        ...stockItems
    }
}