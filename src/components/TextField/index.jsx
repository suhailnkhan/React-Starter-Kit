import * as React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
export default function BasicTextFields(props) {
  const { label, variant, placeholder, ...rest } = props;
  return (
    <TextField
      label={label}
      variant={variant}
      placeholder={placeholder}
      {...rest}
    />
  );
}

BasicTextFields.propTypes = {
  variant: PropTypes.string,
  multiline: PropTypes.bool,
  maxRows: PropTypes.number,
  placeholder: PropTypes.string,
};

BasicTextFields.defaultProps = {
  variant: "outlined",
  multiline: false,
  placeholder: "Enter Text",
};
