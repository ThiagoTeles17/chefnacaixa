import styles from "./Receitas.module.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiDish } from "react-icons/bi";

import risotto_funghi from '../../imgs/risottofunghi.jpg'
import { useEffect } from "react";

export const Receitas = () => {


    return(

        <div className={styles.container}>
            <h1 id={styles.titulo}>Torne-se um <span id={styles.chefSpan}>Chef</span>, escolha o que preparar!</h1>
            <div className={styles.receitasContainer}>
                <div className={styles.receitaContainer}>
                    <div className={styles.imgContainer}>
                        <img src={risotto_funghi} alt="Prato Risoto de Funghi" className={styles.receitaImage}/>
                    </div>
                    <h2>Risoto de Funghi Secchi</h2>
                    <div className={styles.horizontalFlex}>
                        <div className={styles.verticalFlex}>
                            <MdOutlineWatchLater />
                            <span>45min</span>
                        </div>
                        <div className={styles.verticalFlex}>
                            <BiDish />
                            <span>2/4 pessoas</span>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.receitaContainer}>
                    <div className={styles.imgContainer}>
                        <img src={risotto_funghi} alt="Prato Risoto de Funghi" className={styles.receitaImage}/>
                    </div>
                    <h2>Risoto de Funghi Secchi</h2>
                    <div className={styles.horizontalFlex}>
                        <div className={styles.verticalFlex}>
                            <MdOutlineWatchLater />
                            <span>45min</span>
                        </div>
                        <div className={styles.verticalFlex}>
                            <BiDish />
                            <span>2/4 pessoas</span>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.receitaContainer}>
                    <div className={styles.imgContainer}>
                        <img src={risotto_funghi} alt="Prato Risoto de Funghi" className={styles.receitaImage}/>
                    </div>
                    <h2>Risoto de Funghi Secchi</h2>
                    <div className={styles.horizontalFlex}>
                        <div className={styles.verticalFlex}>
                            <MdOutlineWatchLater />
                            <span>45min</span>
                        </div>
                        <div className={styles.verticalFlex}>
                            <BiDish />
                            <span>2/4 pessoas</span>
                        </div>
                        
                    </div>
                </div>



            </div>        
        </div>

    );



}