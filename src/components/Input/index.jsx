import styles from "./syles.module.css";
import PropTypes from "prop-types"; // Importe PropTypes corretamente

export default function Input(props) {
  return props.required ? (
    <input
      {...props}
      className={styles.input}
      required
    />
  ) : (
    <input
      {...props}
      className={styles.input}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
