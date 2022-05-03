import React, {useState} from 'react';
import {NextPage} from "next";
import {nutrients, Pizza} from "../../types/types";
import {AiOutlinePlus} from 'react-icons/ai'
import styles from '../../styles/catalog.module.scss'
import ProductPresentation, {ProductPresentationInterface} from "../product_presentation/ProductPresentation";
import NutrientsList from "../shared/nutrients_list";


interface CatalogCard {
    pizza: Pizza
    presentProduct: Function
}

const CatalogCard:NextPage<CatalogCard> = ({pizza,presentProduct}) => {

    const {scale} = pizza

    const productForPresentation:ProductPresentationInterface = {
        weight_scale: "г",
        weight: pizza.weight,
        energy_value: pizza.energy_value,
        price: pizza.price,
        imageUrl: pizza.imageUrl,
        description: pizza.description,
        scale: pizza.scale,
        name: pizza.name,
    }

    const nutrientsOfProduct:nutrients = {
        nutrients_scale:'г',
        weight: pizza.weight,
        proteins: pizza.proteins,
        weightScale: 'г',
        fats: pizza.fats,
        carbs: pizza.carbs
    }


    return (
        <li className={styles.catalog_card}>
            <div className={styles.leading}>
                <div className={styles.pizza_title}>
                    <span>
                        <p className={styles.name}>{pizza.name} <small>/</small></p>
                        <p className={styles.translate}>{pizza.translate}</p>
                    </span>
                    <p className={styles.price}>{pizza.price} {pizza.currency}</p>
                </div>
                <div className={styles.pizza_preview}>
                    <p className={styles.pizza_category}>{pizza.category}</p>
                    <img
                        src={pizza.imageUrl}
                        alt="Pizza"
                        className={styles.pizza_image}
                    />
                    <button onClick={() => presentProduct(productForPresentation)}  className={styles.add_btn}>
                        <AiOutlinePlus className={styles.add_btn_plus_icon} size={25} />
                    </button>

                </div>
            </div>
            <div className={styles.trailing}>
                <p className={styles.description}>{pizza.description}</p>
                <NutrientsList nutrients={nutrientsOfProduct} scale={'г'} >
                    <li className={styles.energy_value}><p>{pizza.energy_value}ккал на 100{scale}.</p></li>
                </NutrientsList>

            </div>

        </li>
    );
};

export default CatalogCard