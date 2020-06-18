import React, {Component} from "react";
import axios from "axios";

import "./picture-list.css";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PictureList extends Component {

    state = {
        mediaList: [],
        dateFrom: '2020-06-13',
        dateTo: '2020-06-18',
        loading: true,
        error: false
    }

    componentDidMount() {
        this.getMediaList();
    };

    getMediaList() {

        this.setState({
            loading: true,
            error: false
        });

        axios.get(`https://api.nasa.gov/planetary/apod?start_date=${this.state.dateFrom}&end_date=${this.state.dateTo}&api_key=1Y7KbQaKepAKKDALm5fRa1FX69qfZJ50ddAXqtv3`)
            .then(res => {
                let mediaList = [];
                res.data.reverse().map(({media_type, title, date, url}, idx) => {
                    mediaList.push({
                        idx, media_type, title, date, url,
                    });
                });

                this.setState({
                    mediaList,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    error: true
                })
            });
    };

    onChangeDateFrom = (event) => {
        this.setState({
            dateFrom: event.target.value
        }, this.getMediaList);
    };

    onChangeDateTo = (event) => {
        this.setState({
            dateTo: event.target.value
        }, this.getMediaList);
    };

    render() {
        const mediaList = this.state.mediaList;

        const newDate = new Date();
        let year = newDate.getFullYear(),
            month = newDate.getMonth() + 1,
            day = newDate.getDate();
        if (month < 10) {
            month = '0' + month;
        }

        return (
            <div className="picture-list">
                <div className="list-range">
                    <span>From:</span>
                    <input type="date" value={this.state.dateFrom} max={year + '-' + month + '-' + day} onChange={this.onChangeDateFrom}/>
                    <span>To:</span>
                    <input type="date" value={this.state.dateTo} min={this.state.dateFrom} max={year + '-' + month + '-' + day} onChange={this.onChangeDateTo}/>
                </div>

                {
                    this.state.error
                        ? <ErrorIndicator/>
                        : null
                }
                {
                    this.state.loading
                        ? <Spinner/>
                        : <div className="card-list">
                            {
                                mediaList.map(({media_type, title, date, url}, idx) => {
                                    return (
                                        <div key={idx} className="card text-white bg-primary mb-3">
                                            <div className="card-header">{title}</div>
                                            <div className="card-body">
                                                {
                                                    media_type === 'image'
                                                        ? <img src={url}
                                                               alt="astronomy"/>
                                                        :
                                                        <iframe src={url} frameBorder="0" width="100%" height="100%" title="video"
                                                                allowFullScreen/>
                                                }
                                                <span>{date}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </div>
        );
    };
};