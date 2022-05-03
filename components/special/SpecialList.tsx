import React, {useState} from 'react';
import Special, {SpecialInterface} from "./Special";
import {NextPage} from "next";
import styles from '../../styles/special.module.scss'

interface specialListProps{
    listOfSpecial: SpecialInterface[]
}

const Specials:SpecialInterface[] = [{
    id: 'spec0',
    specialTitle:'Скидка на доставку с понедельника по четверг',
    touchedDescription:'На все заказы, оформленные с понедельника по четверг с 11:00 до 16:00.',
    touchedTitle: 'Скидка 10% на доставку',
    index: 0,
},
    {
        id: 'spec1',
        specialTitle:'Скидка на доставку с понедельника по пятницу',
        touchedDescription:'На все заказы, оформленные с понедельника по четверг с 11:00 до 16:00.',
        touchedTitle: 'Скидка 15% на доставку',
        index: 0,
    }]

const SpecialList:NextPage = () => {

    const [touched,setTouched] = useState(makeState())


    function makeState (){
        const map = new Map<string,boolean>()
        for(let i = 0; i < Specials.length; i++){

            const id = Specials[i].id

            map.set(id.toString(),false)

        }
        return map
    }

    function touch(id:string){
        const previousValue:boolean = touched.get(id)!
        const newMap = new Map(touched)
        newMap.set(id,!previousValue)
        setTouched(prev => newMap)
    }

    console.log(touched)
    return (
        <ul className={styles.special_list}>
            {Specials.map((spec,i) => {
                const indexedSpec = {...spec,index:i}
                const isTouched = touched.get(spec.id)!
                return (
                    <Special touched={isTouched} touch={touch} special={indexedSpec} key={i}/>
                )
            })}
        </ul>
    );
};

export default SpecialList;

// export async function getStaticProps(){
//
//     // const {data} = axios.get('')
//
// }