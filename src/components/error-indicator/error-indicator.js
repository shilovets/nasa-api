import React from "react";

import "./error-indicator.css";

const ErrorIndicator = () => {
    return(
        <div className="alert alert-dismissible alert-secondary">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            Select the second date
        </div>
    );
};

export default ErrorIndicator;