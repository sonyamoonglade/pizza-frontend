
export interface Pizza {
    _id: string
    name:string
    category:string
    price:number
    currency:string
    description:string
    weight:number,
    scale:string,
    energy_value:number,
    proteins:number
    fats:number
    carbs:number
    translate:string
    imageUrl:string
}

export interface nutrients{
    weight: number
    weightScale: string
    fats: number
    carbs: number
    proteins: number
    nutrients_scale: string
}