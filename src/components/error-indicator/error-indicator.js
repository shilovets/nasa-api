import React from "react";

import "./error-indicator.css";

const ErrorIndicator = () => {
    return (
        <div className="alert alert-dismissible alert-secondary">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <span>Choose another date</span>
        </div>
    );
};

export default ErrorIndicator;