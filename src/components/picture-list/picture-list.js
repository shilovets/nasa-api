import React, {Component} from "react";
import axios from "axios";

import "./picture-list.css";

export default class PictureList extends Component {

    state = {
        mediaList: []
    };

    componentDidMount() {
        this.getMediaList();
    };

    getMediaList() {

        axios.get("https://api.nasa.gov/planetary/apod?start_date=2020-06-13&end_date=2020-06-18&api_key=1Y7KbQaKepAKKDALm5fRa1FX69qfZJ50ddAXqtv3")
            .then(res => {
                let mediaList = [];
                res.data.reverse().map(({media_type, title, date, url}, idx) => {
                    mediaList.push({
                        idx, media_type, title, date, url,
                    });
                });

                this.setState({
                    mediaList
                });

                console.log(this.state.mediaList);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const mediaList = this.state.mediaList;


        return (
            <div className="media-list">
                {
                    mediaList.map(({media_type, title, date, url}, idx) => {
                        return (
                            <div key={idx} className="card border-primary mb-3">
                                <div className="card-header">{title}</div>
                                <div className="card-body">
                                    {
                                        media_type === 'image'
                                            ? <img src={url}
                                                   alt="astronomy picture"/>
                                            :
                                            <iframe src={url} frameBorder="0" width="100%" height="100%" allowFullScreen
                                                    title="video"></iframe>
                                    }
                                    <span>{date}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        );
    };
};