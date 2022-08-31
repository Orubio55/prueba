import "./inputs.scss";
import React, { useCallback, useMemo, useRef, useState } from "react";
import TextField from "@mui/material/TextField";

const SimpleInput = React.memo(
  ({
    inputProps,
    onChange,
    type,
    label,
    value,
    uncontrolled,
    validation,
    readOnly = false,
    classFieldName,
    classInputName,
    error,
    helperText,
    name,
    textAlign = "left",
  }) => {
    const propValue = value === null ? "" : value;
    const [lastValue, setLastValue] = useState(propValue);
    const [errorValue, setErrorValue] = useState(false);
    const inputRef = useRef(null);
    const onInputChange = useCallback(
      (event) => {
        const changedValue = event.target.value;
        if (
          !readOnly &&
          validation(String(lastValue)) &&
          !validation(String(changedValue))
        )
          setErrorValue(true);
        else setErrorValue(false);

        onChange(changedValue);
        setLastValue(changedValue);
      },
      [lastValue, onChange, readOnly, validation]
    );

    const onBlur = useCallback(() => {
      if (!readOnly && !validation(value)) setErrorValue(true);
    }, [readOnly, validation, value]);

    const inputElementProps = useMemo(() => {
      const inputElementPropsList = {};

      if (!uncontrolled) {
        inputElementPropsList.value = propValue;
      }

      return { ...inputElementPropsList, ...inputProps };
    }, [inputProps, uncontrolled, propValue]);

    const validElement = !readOnly ? !errorValue : true;

    const inputElement = (
      <span className={`field ${classFieldName}`}>
        <span className="control">
          <TextField
            className={`${classInputName}`}
            ref={inputRef}
            onChange={onInputChange}
            onBlur={onBlur}
            type={type}
            label={label}
            error={!validElement || error}
            helperText={!validElement || error ? helperText : null}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...inputElementProps}
            inputProps={{
              style: { textAlign: `${textAlign}` },
            }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            InputProps={{
              readOnly,
            }}
            name={name}
            variant="standard"
          />
        </span>
      </span>
    );

    // if (label) {
    //   inputElement = <InputLabel text={label}>{inputElement}</InputLabel>;
    // }
    return inputElement;
  }
);

export default SimpleInput;
