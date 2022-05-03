import {NextPage} from "next";
import {nutrients, Pizza} from "../types/types";
import axios from "axios";
import CatalogCard from "../components/list/CatalogCard";
import Layout from "../components/layout/Layout";

import styles from '../styles/catalog.module.scss'
import {useMemo, useState} from "react";
import ProductPresentation, {ProductPresentationInterface} from "../components/product_presentation/ProductPresentation";
import AppForm from "../components/app_form/AppForm";

interface CatalogProps {
    listOfPizza: Pizza[]
}

const Index:NextPage<CatalogProps> = ({listOfPizza}) => {

    const [presentedProduct, setPresentedProduct] = useState<ProductPresentationInterface | null>(null)
    const [isPresenting, setIsPresenting] = useState<boolean>(false)



    function presentProduct(product:ProductPresentationInterface){

        setPresentedProduct(prev => product)
        setIsPresenting(prev => true)
        console.log('s')
    }

    function stopPresentation(){
        // setPresentedProduct(null)
        setIsPresenting(prev => false)
    }

    const productNutrients:Partial<nutrients> = useMemo(() => {
        return {
            weight: presentedProduct?.weight,
            weightScale:presentedProduct?.weight_scale,
            proteins: 45,
            nutrients_scale:'г',
            carbs: 23,
            fats:18,

        }
    },[presentedProduct])

    return (
       <Layout >


           <ul className={styles.catalog_list}>
               {listOfPizza.map((pizza) => (
                   <CatalogCard presentProduct={presentProduct} pizza={pizza}/>
               ))}
           </ul>

            <AppForm stopPresentation={stopPresentation} isPresenting={isPresenting}/>
            <ProductPresentation nutrients={productNutrients} isPresenting={isPresenting} product={presentedProduct} />



       </Layout>
    )

}

export async function getStaticProps(context: any){
    const {data} = await axios.get('http://localhost:5000/getListOfPizza')
    const listOfPizza = data.result[0]

    for(let i = 0; i < 10; i++){
        listOfPizza.push(listOfPizza[0])
    }
    return {
        props: {
            listOfPizza : listOfPizza
        }
    }
}

export default Index