import React,{useState} from "react";
import "./Blog.css";
import {Link} from 'react-router-dom'
import axios from '../axios'

function Blog({ post }) {

  const [news, setNews] = useState([])

  const deleteBlog = id => {
      axios.delete(`/blogs/${id}`)
      .then(res => alert(res.data))
      setNews(news.filter(elem => elem._id !== id))
  }

  return (
    <div className="blog">
      {post.map((blogs, key) => (
   
        <div className="blogcon" key={key} >
          <img src={`/uploads/${blogs.blogimage}` } alt='...' />
          <Link to={{
            pathname: `/blogs/${blogs._id}`,
          }} >
          <h1>{blogs.title}</h1>
          
          </Link>
          <p>{blogs.content}</p>
          <span>- {blogs.author} -</span>


          <br />
 <div className='blogbtn' >

          <Link to={{
            pathname:`/update/${blogs._id}`
          }} className="btn1">Edit</Link>
          
       
         <Link>
          <button onClick={() => deleteBlog(blogs._id)} className="btn2">Delete</button>
          </Link>
 </div>
          

          <br />
          <br />

          <hr />
        </div>
    
      ))}
    </div>
  );
}

export default Blog;
