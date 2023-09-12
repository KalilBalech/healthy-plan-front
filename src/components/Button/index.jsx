import styles from "./styles.module.css";

export default function Button(props){
    return(
        <button type="submit" className={styles.button}>
            {props.text}
        </button>
    )
}