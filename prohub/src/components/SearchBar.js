import React from 'react'
import '../styles/SearchBar.css'
import search_logo from '../assets/Search_Icon.png'
import enter from '../assets/enter.jpg'
const SearchBar = () =>{
    return (
        <div className="github-search-container">
        <button className="c1"> <img className="search_logo"src={search_logo} alt="search_logo" /></button>
        <input className="c2" type="text" placeholder="Search for project?" />
        <button className="search-button">
            <img className="search_logo" src={enter}  alt="enter"/>
        </button>
    </div>
    
    );
}

export default  SearchBar;