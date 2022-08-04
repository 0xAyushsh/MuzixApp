import React from 'react'
import Recommendation from '../recommendation/Recommendation'
import Favourite from '../favourite/Favourite'
import './Dashboard.css'

export default function Dashboard() {

    let recommendationClickHandle = () => {
        document.getElementById('favour').style.display = 'none';
        document.getElementById('recommend').style.display = 'block';
        document.getElementById('recommendBtn').classList.add("active");
        document.getElementById('favourBtn').classList.remove("active");
    }

    let favouriteClickHandle = () => {
        document.getElementById('recommend').style.display = 'none';
        document.getElementById('favour').style.display = 'block';
        document.getElementById('favourBtn').classList.add("active");
        document.getElementById('recommendBtn').classList.remove("active");
        
    }

    let handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("username");
        window.location.pathname = "/signin";
    }

        return (
            <div className="dashboard-body">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Muzix App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul class="navbar-nav container-fluid">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Dashboard <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-secondary" onClick={handleLogout}>Logout</button>
                    </li>
                    </ul>
                </div>
                </nav>
                <div className="container-fluid p-5 blur">
                <div className="container-fluid d-flex flex-row justify-content-center align-items-center" role="group" aria-label="Basic example">
                        <button type="button" className="btn p-2 text-white rounded-pill mr-2 my-btn active" id="favourBtn" onClick={favouriteClickHandle}>Favourite</button>
                        <button type="button" className="btn  p-2 text-white rounded-pill my-btn " id="recommendBtn" onClick={recommendationClickHandle}>Recommendations</button>
                </div>
                <Favourite/>
                <Recommendation/>
                </div>
            </div>
        )
    
}
