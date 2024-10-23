import styles from './Header.module.css';
import logo from "../../resources/imgs/logo.png";
import { FaHouse } from "react-icons/fa6";
import { GiKnifeFork } from "react-icons/gi";
import { IoIosInformationCircle } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';

export const Header = () => {

    const navigate = useNavigate();

    const [showSidebar, setshowSidebar] = useState(false);

    const sideBarRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const handleClickOutside = (event) => {
        if(sideBarRef.current && !sideBarRef.current.contains(event.target)){
            setshowSidebar(false);
        }
    }

    const navigateTo = (a) => {
        navigate("/" + a);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return(

        <div className={styles.headerContainer}>
            
            {/*SIDEBAR para telas menores*/}
            <div ref={sideBarRef} className={`${showSidebar ? styles.sideBar : styles.sideBarClosed}`}>
                <Link onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setshowSidebar(false);}}  to="/" className={styles.optionSideBar}>
                    <FaHouse/>
                    <span>Home</span>
                </Link>
                <Link onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setshowSidebar(false);}} to={"/receitas"} className={styles.optionSideBar}>
                    <GiKnifeFork />
                    <span>Receitas</span>
                </Link>
                <Link onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setshowSidebar(false);}} to="/about" className={styles.optionSideBar}>
                    <IoIosInformationCircle />
                    <span>Sobre nós</span>
                </Link>
            </div>
            
            {!isMobile ?
            <>
            
            <div className={styles.optionsContainer}>

                <Link onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}  to="/" className={styles.option}>
                    <FaHouse/>
                    <span>Home</span>
                </Link>
                <Link onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} to={"/receitas"} className={styles.option}>
                    <GiKnifeFork />
                    <span>Receitas</span>
                </Link>
                <Link onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} to="/about" className={styles.option}>
                    <IoIosInformationCircle />
                    <span>Sobre nós</span>
                </Link>
            </div>
            </>
            :
            <>
                <IoMdMenu onClick={() => setshowSidebar(true)} className={styles.option} size={30}/>
                <img onClick={() => navigateTo()} className={styles.logo} alt='Logotipo Chef na Caixa' src={logo}/> 
            </>
            }
            <Link to="/cart" className={styles.option}>
                <AiOutlineShoppingCart size={30}/>
            </Link>
        </div>


    );    

}