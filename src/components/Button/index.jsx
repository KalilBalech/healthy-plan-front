import styles from "./styles.module.css";

export default function Button(){
    return(
        <button type="submit" className={styles.button}>
            Cadastrar
        </button>
    )
}