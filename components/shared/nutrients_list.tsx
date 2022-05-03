import React from 'react';
import {nutrients} from "../../types/types";
import {NextPage} from "next";
import styles from "../../styles/catalog.module.scss";

interface nutrientListProps{
    nutrients: nutrients
    children?: any
    scale: string
}

const NutrientsList:NextPage<nutrientListProps> = ({nutrients,children, scale}) => {

    return (
        <ul className='nutrients_list presentation'>
            <li className='nutrient'><p>Жиры: {nutrients.fats}{scale};</p></li>
            <li className='nutrient'><p>Углеводы: {nutrients.carbs}{scale};</p></li>
            <li className='nutrient'><p>Белки: {nutrients.proteins}{scale};</p></li>
            {children && children}
        </ul>
    );
};

export default NutrientsList;