import { useState } from 'react'
import reactLogo from './assets/vegan.png'
import quote from './assets/quote.png'

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
      data:[]
    }
  }
  // GETS DATA AND EXTRACTS IMPORTANT PARTS
  updateArticles(){
    fetchArticles().then(data=>{
      console.log(data)
      // const article1 = data[0]
      // const article2 = data[1]
      // const article3 = data[2]

      this.setState({
        data: data
      })
      // console.log(this.state.name1)
      // console.log (this.state.message1)
      
    })
  }  
  //SETS INTERVAL FOR CALLING API
  componentDidMount(){
    this.updateArticles()
    setInterval(this.updateArticles,100000)
  }

  render(){
      const {data} = this.state
      
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
        <div> 
        {this.state.data.length &&(
          <div class="row"> 
          {data.map(article =>{
            return(
              <React.Fragment>  
                <div class="article">        
                <h3>{article.name}</h3>
                <p>By {article.author}</p>
                <p><strong>Comments:</strong> {article.comments.map(comment => {
                  return(
                    <div class="comment">
                      <p>{comment.name} • {comment.datePosted}</p>
                      <img src={quote} class="comment-content"></img>
                      <p class="comment-content">{comment.content}</p>
                    </div>  
                  )
                })}</p>
              </div>  
              </React.Fragment>
            )
          }
            )}
        </div>
        )}      
        {/* <div class="article">        
          <h3>article name: {this.state.data[1]}</h3>
          <p>author: {this.state.data}</p>
        </div>
        <div class="article">        
          <h3>article name: {this.state.name3}</h3>
          <p>author: {this.state.author3}</p>
        </div> */}
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