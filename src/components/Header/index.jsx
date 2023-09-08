import PropTypes from 'prop-types'
import styles from './styles.module.css'

export default function Header(props){
    return(
        <div id="Header" className={styles.header}>
            {props.children}
        </div>
    )
}

Header.propTypes = {
    children: PropTypes.node
};
  