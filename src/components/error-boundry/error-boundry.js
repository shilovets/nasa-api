import React from "react";

import "./error-boundry.css";

const ErrorBoundry = () => {
    return (
        <div className="alert alert-dismissible alert-secondary">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <h2>Ooops! Something gone wrong with API.</h2>
            <h3>NASA has already sent astronauts to fix the problem.</h3>
            <h5>(Try choose this date later!)</h5>
        </div>
    );
};

export default ErrorBoundry;