import styles from './Footer.module.css';
import { PiInstagramLogoBold } from "react-icons/pi";


export const Footer = () => {

    return(

        <div className={styles.footerContainer}>
            <PiInstagramLogoBold size={28} className={styles.icon}/>            
        </div>


    );    

}