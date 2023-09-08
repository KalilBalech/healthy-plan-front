import PropTypes from 'prop-types'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'

export default function HeaderMainButton(props){
    return(
        <Link {...props} className={styles.HeaderMainButton} >{props.text}</Link>
    )
}

HeaderMainButton.propTypes = {
    text: PropTypes.string.isRequired
};
  