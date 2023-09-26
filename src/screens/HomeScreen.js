import React from "react";
import "./HomeScreen.css"
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row" ;
import requests from "../Requests";
function HomeScreen() {
    return <div className="homeScreen">
        <Nav />

        < Banner />

        <Row title='NETFLIX ORIGINALS'fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title='NETFLIX ORIGINALS'fetchUrl={requests.fetchActionMovies}/>
        <Row title='NETFLIX ORIGINALS'fetchUrl={requests.fetchComedyMovies}/>
        <Row title='NETFLIX ORIGINALS'fetchUrl={requests.fetchDocumentaries}/>
        <Row title='NETFLIX ORIGINALS'fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='NETFLIX ORIGINALS'fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='NETFLIX ORIGINALS'fetchUrl={requests.fetchTrending}/>
        <Row title='NETFLIX ORIGINALS'fetchUrl={requests.fetchTopRated}/>

        

    </div>;
}

export default HomeScreen;