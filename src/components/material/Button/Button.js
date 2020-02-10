import React from 'react';

function Button({className, children, onClick}) {
    return (
        <button onClick={onClick} className={className}> {children} </button>
    );
}

export default Button;