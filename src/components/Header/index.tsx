import styles from './Header.module.scss';
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Header() {
    return (
        <header className={`${styles.heading} container`}>
            <img src="/perfil.jpg" alt="foto perfil" />
            <h1>Jéssica Medeiros Poçarli</h1>
            <h2>DEVELOPER FRONT END</h2>
            <div className={styles.socialMidias}>
                <a href="https://github.com/jessicamedeirosp"><BsGithub size="30px" color="#f8f8f2"/></a>
                <a href="https://www.linkedin.com/in/jessicamedeirospocarli/"><BsLinkedin size="30px" color="#f8f8f2"/></a>
                <a href="https://www.instagram.com/jess.coder/"><BsInstagram size="30px" color="#f8f8f2"/></a>
            </div>
        </header>
    )
}