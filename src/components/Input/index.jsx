import styles from "./syles.module.css";
import PropTypes from "prop-types"; // Importe PropTypes corretamente

export default function Input(props) {
  return props.required ? (
    <input
      {...props}
      className={props.block ? styles.input : styles.inputNotBlock}
      required
    />
  ) : (
    <input
      {...props}
      className={props.block ? styles.input : styles.inputNotBlock}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  block: PropTypes.bool,
};
