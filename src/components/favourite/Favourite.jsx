import React, { Component } from 'react'
import axios from 'axios'
import MusicCard from '../musicCard/MusicCard'


export default class Favourite extends Component {

    state = {
        tracks: [

        ]
    }

    componentDidMount() {
        let usrnm = localStorage.getItem("username");
        axios.get(`http://localhost:3333/Songs?username=${usrnm}`)
            .then(res => {
                this.setState({ tracks: res.data }, () => {
                });  
            }).catch(error =>{
              })
    }

    componentDidUpdate(){
        axios.get('http://localhost:3333/Songs')
        .then(res => {
            this.setState({ tracks: res.data }, () => {
            })
            
        }).catch(error =>{
          })
    }

    render() {
        return (
            <div className="favourite-body" id="favour">
                <div className="container-fluid p-5 blur">
                    <div className="row mt-5 ">
                        {
                            this.state.tracks.map((item) => (
                                <div className="col-lg-6 d-flex flex-row align-item-center justify-content-center">
                                    <MusicCard  item={item} fav={false}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
