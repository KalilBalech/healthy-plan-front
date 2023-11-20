import styles from "./styles.module.css";
import PropTypes from 'prop-types'


export default function ButtonS(props){
    return(
        <button type="submit" className={styles.button} onClick={props.OnClickFunction}>
            {props.text}
        </button>
    )
}

ButtonS.propTypes = {
    text: PropTypes.string,
    OnClickFunction: PropTypes.func
};