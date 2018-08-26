import React from "react";

const Button = ({ buttonName, onClick }) => {
    return (
        <div className="col-sm-4 text-center">
            <button
                type="button"
                className="btn btn-outline-secondary action-on-flight"
                onClick={onClick}
            >
                {buttonName}
            </button>
        </div>
    );
};

export default Button;
