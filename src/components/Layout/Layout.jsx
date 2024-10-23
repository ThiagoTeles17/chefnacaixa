import logo from "../../resources/imgs/logo.png";
import styles from "./Layout.module.css";

export const Layout = () => {

    return(
        <div className={styles.container}>
            <div className={styles.leftBar}>
                <img className={styles.logo} alt='Logotipo Chef na Caixa' src={logo}/> 
            </div>
            <div className={styles.rightBar}></div>
        </div>
    );

}