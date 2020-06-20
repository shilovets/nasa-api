import React from "react";
import {AstronomyConsumer} from "../astronomy-service-context/astronomy-service-context";

const withAstronomyService = () => (Wrapped) => {
    return (props) => {
        return (
            <AstronomyConsumer>
                {
                    (astronomyService) => {
                        return (
                            <Wrapped {...props} astronomyService={astronomyService}/>
                        );
                    }
                }
            </AstronomyConsumer>
        );
    };
};

export {withAstronomyService};