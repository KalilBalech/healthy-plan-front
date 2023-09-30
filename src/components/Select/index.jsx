import styles from "./syles.module.css";
import PropTypes from "prop-types"; // Importe PropTypes corretamente

export default function Select(props) {
  return props.required ? (
    <select
      {...props}
      className={styles.select}
      required
    >{props.children}</select>
  ) : (
    <select
      {...props}
      className={styles.select}
    >{props.children}</select>
  );
}

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
