import styles from "./styles.module.css";
import PropTypes from 'prop-types'

export default function Button(props){
    return(
        <button type="submit" className={styles.button}>
            {props.text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}