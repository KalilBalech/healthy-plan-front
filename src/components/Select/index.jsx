import styles from "./syles.module.css";
import PropTypes from "prop-types"; // Importe PropTypes corretamente

export default function Select(props) {
  return props.required ? (
    <select
      {...props}
      className={props.block ? styles.select : styles.selectNotBlock}
      required
    >{props.children}</select>
  ) : (
    <select
      {...props}
      className={props.block ? styles.select : styles.selectNotBlock}
    >{props.children}</select>
  );
}

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
