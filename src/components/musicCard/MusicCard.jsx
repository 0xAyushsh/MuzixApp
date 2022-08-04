import axios from 'axios'
import React, { Component } from 'react'
import './musicCard.css'


export default class MusicCard extends Component {




    handleAddFav = () => {
          console.log(this.props);
          const FavSong = {
            username: localStorage.getItem("username"),
            name: this.props.item.name,
            albumName: this.props.item.albumName,
            artistName: this.props.item.artistName,
            previewURL: this.props.item.previewURL,
            id: this.props.item.id + localStorage.getItem("username")
        }

        axios.post('http://localhost:3333/Songs',FavSong).then(res =>{
            alert("success")
        }).catch(e=>{
            alert('Song already on the list')
        })
        
    }

    render(){
    return (
        <div class="wrapper">
        <div class="img-area">
          <div class="inner-area">
            <img
              src="https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="content-row">
          <div class="detail-row">
            <div class="name">Artist Name : </div>
            <div class="about">{this.props.item.artistName}</div>
          </div>
          <div class="detail-row">
            <div class="name">Album Name : </div>
            <div class="about">{this.props.item.albumName}</div>
          </div>

          <div class="detail-row">
            <div class="name">Song Name : </div>
            <div class="about">{this.props.item.name}</div>
          </div>
          <audio controls>
            <source
              src={this.props.item.previewURL}
              type="audio/mpeg"
            />
          </audio>
        </div>

        <div class="social-icons">
          <a href="#" class="fb"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" class="insta"><i class="fab fa-instagram"></i></a>
          <a href="#" class="yt"><i class="fab fa-youtube"></i></a>
        </div>
        {this.props.fav &&     
        <div class="buttons">
          <button onClick={this.handleAddFav} id="favButton">Favorites</button>
        </div>
        }
      </div>


    )
    }
}
