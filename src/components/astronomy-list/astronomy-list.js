import React, {Component} from "react";
import {connect} from "react-redux";

import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import {withAstronomyService} from "../hoc/with-astronomy-service";
import {
    astronomyError,
    astronomyListLoaded,
    astronomyRequested,
    startDateChanged,
    endDateChanged
} from "../../actions/index";
import DateConverter from "../../utils/date-converter";

import "./astronomy-list.css";

class AstronomyList extends Component {

    componentDidMount() {
        this.props.fetchAstronomyList(this.props.startDate, this.props.endDate);
    };

    handleStartDateChanged = (event) => {
        this.props.startDateChanged(event.target.value);
        this.props.fetchAstronomyList(event.target.value, this.props.endDate);
    }

    handleEndDateChanged = (event) => {
        this.props.endDateChanged(event.target.value);
        this.props.fetchAstronomyList(this.props.startDate, event.target.value);
    }

    render() {
        const {astronomy, loading, error, startDate, endDate} = this.props;

        return (
            <div className="picture-list">
                <div className="list-range">
                    <span>From:</span>
                    <input type="date"
                           value={startDate}
                           max={endDate}
                           onChange={this.handleStartDateChanged}
                    />
                    <span>To:</span>
                    <input type="date"
                           value={endDate}
                           min={startDate}
                           max={DateConverter.convertDateToDefaultFormat(new Date())}
                           onChange={this.handleEndDateChanged}/>
                </div>

                {error ? <ErrorIndicator/> : null}
                {loading ? <Spinner/> : null}

                <div className="card-list">
                    {
                        astronomy.map(({media_type, title, date, url}, idx) => {
                            return (
                                <div key={idx} className="card text-white bg-primary mb-3">
                                    <div className="card-header">{title}</div>
                                    <div className="card-body">
                                        {
                                            media_type === 'image'
                                                ? <img src={url}
                                                       alt="astronomy"/>
                                                :
                                                <iframe src={url} frameBorder="0" width="100%" height="100%"
                                                        title="video"
                                                        allowFullScreen/>
                                        }
                                        <span>{date}</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    };
}

const mapStateToProps = ({astronomy, loading, error, startDate, endDate}) => {
    return {
        astronomy,
        loading,
        error,
        startDate,
        endDate
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {astronomyService} = ownProps;

    return {
        fetchAstronomyList: (startDate, endDate) => {
            dispatch(astronomyRequested());
            astronomyService.getAstronomyList(startDate, endDate)
                .then(({data}) => {
                    dispatch(astronomyListLoaded(data.reverse()));
                })
                .catch(err => {
                    dispatch(astronomyError(err));
                });
        },
        startDateChanged: (startDate) => {
            dispatch(startDateChanged(startDate))
        },
        endDateChanged: (endDate) => {
            dispatch(endDateChanged(endDate))
        }
    };
};

export default withAstronomyService()(connect(mapStateToProps, mapDispatchToProps)(AstronomyList));