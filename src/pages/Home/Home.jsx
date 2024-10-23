import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Center } from '@react-three/drei';
import { Caixa } from '../../components/caixa/Caixa';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <div style={{textAlign: 'center', marginTop: '5rem'}}>
                <h1 id={styles.titulo}>Pensou em Cozinhar?</h1>
                <h2 id={styles.subtitulo}>Escolha sua receita e nós enviamos no conforto de sua casa!</h2>
            </div>
            <div onClick={() => navigate("/receitas")} className={styles.btnOne} style={{marginTop: "3rem"}}>Quero receber</div>

            <div className={styles.boxThreeContainer}>
                <Canvas>
                    <Environment preset='forest'/>
                    <OrbitControls  enablePan={false} autoRotateSpeed={5} enableZoom={false}/>
                    <Center>
                        <Caixa/>
                    </Center>
                </Canvas>
            </div>
        </div>
    );



}