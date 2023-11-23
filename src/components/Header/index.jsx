import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Link } from 'react-router-dom';

export default function Header(props){
    return(
        <div className={styles.header}>
            <Link to='/' className={styles.rightSide} onClick={()=>{
                localStorage.removeItem('token');
                localStorage.removeItem('personalID');
            }}>
                <img src='../../../public/rodrigogoes.png' className={styles.rodrigogoes}/>
                <h1 className={styles.healthyPlan}>Healthy-plan</h1>
            </Link>
            <div className={styles.leftSide}>
                {props.children}
            </div>
        </div>
    )
}

Header.propTypes = {
    children: PropTypes.node
};
  