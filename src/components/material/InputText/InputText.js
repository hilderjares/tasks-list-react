import React from "react";

const TYPE = "text";

function InputText({ className, onChange, value, placeholder }) {
    return (
        <input
            type={TYPE}
            className={className}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            data-testid="input-text"
        />
    );
}

export default InputText;
