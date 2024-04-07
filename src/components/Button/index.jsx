import styles from "./styles.module.css";
import PropTypes from 'prop-types'

export default function Button(props){
    return(
        <button type="submit" className={styles.button} onClick={props.onClick} disabled={props.disabled}>
            {props.text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};