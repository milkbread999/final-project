import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react';
import Marquee from "react-fast-marquee";

async function fetchArticles(){
  const data = await fetch("http://localhost:3000/")
  return (data.json())
}

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  // GETS DATA AND EXTRACTS IMPORTANT PARTS
  updateArticles(){
    fetchArticles().then(data=>{
      console.log(data)
      const article1 = data[0]
      const article2 = data[1]
      const article3 = data[2]
      const comment = data[0].comments[0]


      this.setState({
        name1: article1.name,
        author1: article1.author,
        name2: article2.name,
        author2: article2.author,
        name3: article3.name,
        author3: article3.author,
      })
      console.log(this.state.name1)
      // console.log(comment)

    })
  }  
  //SETS INTERVAL FOR CALLING API
  componentDidMount(){
    this.updateArticles()
    setInterval(this.updateArticles,100000)
  }

  render(){
  
    return (

      <div className="App">
      <div class="header">
        <a class = "logo" href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Title</h1>
        <div className="navLinks">
        <ul>
        <li><a href="https://google.com" target="_blank">About</a></li>
        <li><a href="https://google.com" target="_blank">Contact</a></li>
        </ul>
      </div>
      </div>
      <div className="card featuredstories">
      <div class="marquee-text">
            <Marquee speed={100}><h2> FEATURED STORIES </h2></Marquee>
        </div>
        <div class="row">
        <div class="article">        
          <h3>article name: {this.state.name1}</h3>
          <p>author: {this.state.author1}</p>
        </div>
        <div class="article">        
          <h3>article name: {this.state.name2}</h3>
          <p>author: {this.state.author2}</p>
        </div>
        <div class="article">        
          <h3>article name: {this.state.name3}</h3>
          <p>author: {this.state.author3}</p>
        </div>
        </div>
    </div>
      <div className="card whoweare">
          <h2>WHO WE ARE</h2>
            <p>
              Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.
            </p>
          <a href="https://google.com">Read More</a>
      </div>
    </div>
    )
  }
}