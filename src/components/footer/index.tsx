import styles from './footer.module.css'
import dbImage from "../../assets/db-image.png"
export default function Footer() {
    return(
        <footer className={styles.footer}>
            
                <span>
                    make with love
                </span>
                <img src={dbImage} alt="" />
           
        </footer>
    )
}