import styles from "./Receitas.module.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import logo from "../../resources/imgs/logo.png";
import { BsBox2Heart } from "react-icons/bs";
import risotto_funghi from '../../imgs/risottofunghi.jpg'
import { useEffect } from "react";

export const Receitas = () => {


    return(

        <div className={styles.container}>
            <div className={styles.titleBackground}>
                <h1 id={styles.titulo}>Torne-se um <span id={styles.chefSpan}>Chef</span>, escolha o que preparar!</h1>
            </div>
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
                    <div className={styles.buyButton}>
                            <BsBox2Heart id={styles.boxIconBtn}/>
                            <h2>Comprar Caixa</h2>
                    </div>
                </div>
                <div className={styles.receitaContainer}>
                    <div className={styles.imgContainer}>
                        <img src="https://bing.com/th?id=OSK.7a30867f24f04dded2cfe600088d2e80" style={{width: 300}} alt="Prato Risoto de Funghi" className={styles.receitaImage}/>
                    </div>
                    <h2>Risoto de camarão</h2>
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
                    <div className={styles.buyButton}>
                            <BsBox2Heart id={styles.boxIconBtn}/>
                            <h2>Comprar Caixa</h2>
                    </div>
                </div>
                <div className={styles.receitaContainer}>
                    <div className={styles.imgContainer}>
                        <img src="https://www.guacira.com.br/images/receitas/0702133001674043238.webp"  style={{width: 400}} alt="Prato Risoto de Funghi" className={styles.receitaImage}/>
                    </div>
                    <h2>Risoto de Gorgonzola</h2>
                    <div className={styles.horizontalFlex}>
                        <div className={styles.verticalFlex}>
                            <MdOutlineWatchLater />
                            <span>30min</span>
                        </div>
                        <div className={styles.verticalFlex}>
                            <BiDish />
                            <span>2/4 pessoas</span>
                        </div>
                        
                    </div>
                    <div className={styles.buyButton}>
                            <BsBox2Heart id={styles.boxIconBtn}/>
                            <h2>Comprar Caixa</h2>
                    </div>
                </div>



            </div>        
        </div>

    );



}