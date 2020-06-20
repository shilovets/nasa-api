import React from "react";

import "./error-indicator.css";

const ErrorIndicator = () => {
    return (
        <div className="alert alert-dismissible alert-secondary">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <span>Choose the second date</span>
        </div>
    );
};

export default ErrorIndicator;