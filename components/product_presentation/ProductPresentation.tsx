import React, {useEffect} from 'react';
import {NextPage} from "next";
import NutrientsList from "../shared/nutrients_list";
import styles from '../../styles/catalog.module.scss'
import {nutrients} from "../../types/types";

interface productPresentationProps{

    product: ProductPresentationInterface | null
    isPresenting: boolean
    nutrients?: nutrients

}

export interface ProductPresentationInterface{
    name: string
    price: number
    imageUrl: string
    description?: string
    weight: number
    weight_scale: string
    energy_value: number
    scale: string
}

const currency = '₽'

const ProductPresentation:NextPage<productPresentationProps> = ({product,isPresenting,nutrients}) => {

    useEffect(() => {
        const body = document.querySelector('body')

        if(isPresenting){
            body!.style.overflow = 'hidden'
        }
        return () => {
            body!.style.overflow = 'visible'
        }
    }, [isPresenting])



    return (

        <div className={ isPresenting ? 'product-presentation' : 'product-presentation hidden'}>

            <div className={styles.pizza_title}>
                    <span>
                        <p className={styles.name}>{product?.name}</p>
                    </span>
                <p className={styles.price}>{product?.price} {currency}</p>
            </div>
            <img className={styles.pizza_image} src={product?.imageUrl} alt=""/>
            <div className='miscellaneous'>
                <p className='description'>{product?.description}</p>
                {nutrients &&
                    <NutrientsList nutrients={nutrients} scale={'г'} />
                }


            </div>
        </div>
    );
};

export default ProductPresentation;