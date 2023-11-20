import styles from "./styles.module.css";
import PropTypes from "prop-types";

export default function AnamnesisCard(props) {

  return (      
        <div className={styles.athleteContainer}>
          <p>{props.id}</p>
        </div>
  );
}

AnamnesisCard.propTypes = {
  id: PropTypes.string.isRequired,
};
