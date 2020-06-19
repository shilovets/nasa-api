import React, {Component} from "react";
import axios from "axios";

import "./picture-details.css";
import Spinner from "../spinner/spinner";

export default class PictureDetails extends Component {

    state = {
        data: {
            mediaType: '',
            title: '',
            url: '',
            date: '',
            explanation: ''
        },

        loading: true
    };

    componentDidMount() {
        const date = localStorage.getItem('date');

        this.setState({
            data: {
                date: date === null ? '' : date
            }
        }, this.getMediaDate);

    };

    getMediaDate() {
        this.setState({
            loading: true
        });

        axios.get(`https://api.nasa.gov/planetary/apod?date=${this.state.data.date}&api_key=1Y7KbQaKepAKKDALm5fRa1FX69qfZJ50ddAXqtv3`)
            .then(res => {
                this.setState({
                    data: {
                        mediaType: res.data.media_type,
                        title: res.data.title,
                        url: res.data.url,
                        date: res.data.date,
                        explanation: res.data.explanation
                    },
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
                console.log(error);
            });
    };

    changeDateValue = (event) => {
        const date = event.target.value;

        if(date !== this.getToday()) {
            localStorage.setItem('date', date)
        }

        this.setState({
            data: {
                date
            }
        }, this.getMediaDate);
    };

    getToday(){
        const newDate = new Date();
        let year = newDate.getFullYear(),
            month = newDate.getMonth() + 1,
            day = newDate.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        return year + '-' + month + '-' + day;
    };

    render() {
        const {mediaType, title, url, date, explanation} = this.state.data;
        let mediaFile = null;
        const today = this.getToday();

        mediaType === 'image'
            ? mediaFile = <img src={url} alt="Astronomy"/>
            : mediaFile = (
                <iframe src={url} frameBorder="0" width="70%" height="600px" allowFullScreen title="video"/>
            )

        return (

            <div className="picture-details">
                {
                    this.state.loading
                        ? <Spinner/>
                        : (<React.Fragment>
                            <div className="picture-date">
                                <h3>Choose another day</h3>
                                <input type="date" value={date} onChange={this.changeDateValue}
                                       max={today}/>
                            </div>

                            <h4>{date}</h4>
                            <h1>{title}</h1>
                            {mediaFile}
                            <p>{explanation}</p>
                        </React.Fragment>)
                }

            </div>
        );
    };
};