import styles from './layout.module.scss'
import navStyles from './nav-styles.module.scss'
import {NextPage} from "next";
import Head from "next/head";
import {FaRegUserCircle} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'
import {BsClipboardData, BsCart4} from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
import {CgMenuGridO} from 'react-icons/cg'
import {useRef, useState} from "react";
import SpecialList from "../special/SpecialList";
interface layoutProps {
    children: any
    keywords?: string[]
}
const Layout:NextPage<layoutProps> = ({children,keywords}) => {

    const [menuOpened, setMenuOpened] = useState(false)


    function toggleMenu() {
        setMenuOpened(prev => !prev)
    }

    return (
        <div className={styles.layout}>
            <Head>
                <meta name='keywords' content={'pizza' + keywords?.join(", ")} />
                <meta name='author' content='Timofei'/>
                <title>2 Pizzas</title>
            </Head>
            <div className={styles.header}>



                <div className={styles.header_top}>
                    <p>Пицца-Тупицца</p>
                    {menuOpened ?
                        <GrClose onClick={toggleMenu} size={20}/> :
                        <CgMenuGridO onClick={toggleMenu} size={25} />
                    }

                </div>

                <SpecialList />



                <div className={`${navStyles.mobile_nav} ${!menuOpened && navStyles.mobile_nav_closed}`}>
                    <ul className={navStyles.nav_list}>
                        <li className={navStyles.nav_item}>
                            <p>Войти</p>
                            <FaRegUserCircle />
                        </li>
                        <li className={navStyles.nav_item}>
                            <p>О нас</p>
                            <FcAbout />
                        </li>
                        <li className={navStyles.nav_item}>
                            <p>Больше информации</p>
                            <BsClipboardData />
                        </li>
                        <li className={navStyles.nav_item}>
                            <p>Корзина</p>
                            <BsCart4 />
                        </li>
                    </ul>
                </div>


            </div>
            <main>
                {children}
            </main>
        </div>

    );
};

export default Layout;
