import React,{useState, useEffect} from 'react';
import './App.css';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Header from './components/Header'
import Navbar from './components/Navbar';
import Createblog from './components/Createblog';
import Hblog from './components/Hblog'
import Editblog from './components/Editblog'

import {Route} from 'react-router-dom'
import axios from './axios'

function App() {

  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get('/blogs')
    .then(res => setPost(res.data))
    .catch(err => console.log(err))
  })

  return (
    <div className="app">
     <Header/>
     <Navbar/>
     <Route exact path='/' render={() => <Blog post={post} />} />
     <Route path='/blogs/:id' render={props => <Hblog {...props} post={post} /> } />
     <Route path='/update/:id' render={props => <Editblog {...props} post={post} /> } />
     <Route path='/createblog' render={() => <Createblog/>} />
     <Footer/>
    </div>
  );
}

export default App;
