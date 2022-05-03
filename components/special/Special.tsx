import React, {useState} from 'react';
import {NextPage} from "next";

import styles from '../../styles/special.module.scss'

export interface SpecialInterface {
    id: string,
    specialTitle: string
    imageUrl?: string
    touchedTitle:string
    touchedDescription: string
    index: number
}

export interface specialProps{
    special : SpecialInterface
    touched: boolean
    touch: Function
}

const Special:NextPage<specialProps> = ({special,touched,touch}) => {

    const {
        id,
        specialTitle,
        imageUrl,
        touchedTitle,
        touchedDescription,
        index
    } = special


    return (
        // @ts-ignore
        <div className={styles.special_card} onClick={() => touch(id)} >

            <div className={touched ? 'special_title closed': 'special_title'}>
                <p>{specialTitle}</p>
                {/*{imageUrl && <img src={imageUrl} alt="t"/>}*/}
            </div>

            <div className={!touched ? 'special_title closed': 'special_title'}>
                <p className='special_title_touched'>{touchedTitle}</p>
                <p className='special_description_touched'>{touchedDescription}</p>
            </div>


        </div>
    );
};

export default Special;