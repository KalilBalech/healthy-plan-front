import PropTypes from "prop-types"; // Importe PropTypes corretamente
import styles from './styles.module.css'

export default function Title(props){
    return(
        <h1 className={styles.title}>{props.title}</h1>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
  };
  