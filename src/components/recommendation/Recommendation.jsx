import React, { Component } from 'react'
import axios from 'axios'
import MusicCard from '../musicCard/MusicCard'


export default class Recommendation extends Component {

    state = {
        tracks: [

        ]
    }

    componentDidMount() {
        axios.get('https://api.napster.com/v2.2/tracks/top?apikey=YmMwYjYyYTUtMGVlNy00ZjIxLWIyY2UtMDA0MzlkMTliZDQ3')
            .then(res => {
                this.setState({ tracks: res.data.tracks }, () => {
                })
            }).catch(error =>{
              });
        
    }

    render() {
        return (
            <div className="recommendation-body" id="recommend">
                <div className="container-fluid p-5 blur">
                    <div className="row mt-5 ">
                        {
                            this.state.tracks.map((item) => (
                                <div className="col-lg-6 d-flex flex-row align-item-center justify-content-center">
                                    <MusicCard  item={item} fav={true}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
