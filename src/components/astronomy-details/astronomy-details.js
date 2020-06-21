import React, {Component} from "react";
import {connect} from "react-redux";

import Spinner from "../spinner/spinner";
import ErrorBoundry from "../error-boundry/error-boundry";
import {withAstronomyService} from "../hoc/with-astronomy-service";
import {astronomyLoaded, astronomyRequested, astronomyError} from "../../actions/index";
import DateConverter from "../../utils/date-converter";

import "./astronomy-details.css";

const currentDate = DateConverter.convertDateToDefaultFormat(new Date());

class AstronomyDetails extends Component {

    componentDidMount() {
        this.props.fetchAstronomy(this.props.selectedDate);
    };

    handleChangeDate = event => {
        const date = event.target.value;

        if (date !== currentDate) {
            localStorage.setItem('date', date);
        }

        this.props.fetchAstronomy(date);
    };

    render() {
        const {astronomy, loading, error} = this.props;

        return (
            <div className="picture-details">
                <div className="picture-date">
                    <h3>Choose another date</h3>
                    <input type="date"
                           max={currentDate}
                           value={astronomy.length > 0 ? astronomy[0].date : currentDate}
                           onChange={this.handleChangeDate}/>
                </div>
                {error ? <ErrorBoundry/> : null}
                {loading ? <Spinner/> : null}
                {
                    astronomy.map(({media_type, title, date, url, explanation}, idx) => {
                        return (
                            <div className="picture-details" key={idx}>

                                <h4>{date}</h4>
                                <h1>{title}</h1>
                                {
                                    media_type === 'image'
                                        ? <img src={url}
                                               alt="astronomy"/>
                                        :
                                        <iframe src={url} frameBorder="0" width="70%" height="700px"
                                                title="video"
                                                allowFullScreen/>
                                }
                                <p>{explanation}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
}

const mapStateToProps = ({astronomy, loading, error, selectedDate}) => {
    return {
        astronomy,
        loading,
        error,
        selectedDate
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {astronomyService} = ownProps;
    return {
        fetchAstronomy: (selectedDate) => {
            dispatch(astronomyRequested());
            astronomyService.getAstronomy(selectedDate)
                .then(({data}) => {
                    let dataPicture = [];
                    dataPicture.push(data);
                    dispatch(astronomyLoaded(dataPicture));
                })
                .catch(err => {
                    dispatch(astronomyError(err));
                });
        }
    };

};

export default withAstronomyService()(connect(mapStateToProps, mapDispatchToProps)(AstronomyDetails));