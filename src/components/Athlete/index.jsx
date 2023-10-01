import styles from "./styles.module.css";
import PropTypes from "prop-types"; // Importe PropTypes corretamente


export default function Athlete(props){
    const id = props.id
    console.log('id: '+id)
    return(
        <div className={styles.athlete}>
            <h1>{props.name + ' ' + props.surname}</h1>
            <p>{props.email}</p>
        </div>
    )
}

Athlete.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };
  