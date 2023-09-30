import PropTypes from "prop-types"; // Importe PropTypes corretamente
import styles from './styles.module.css'

export default function Subtitle(props){
    return(
        <h1 className={styles.subtitle}>{props.subtitle}</h1>
    )
}

Subtitle.propTypes = {
    subtitle: PropTypes.string.isRequired,
  };
  