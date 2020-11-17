import React, { useState, useEffect } from "react";
import axios from "../axios";
import './Hblog.css'
import {Link} from 'react-router-dom'

const Hblog = props => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [filename, setFilename] = useState("");
  

  useEffect(() => {
    axios
      .get(`/blogs/${props.match.params.id}`)
      .then(res => [
        setTitle(res.data.title),
        setAuthor(res.data.author),
        setContent(res.data.content),
        setFilename(res.data.blogimage)
      ])
      .catch(err => console.log(err));
  }, [props]);

  

  return (
    <div className='dummy' >
      {
      <div className='news' >
      <img src={`/uploads/${filename}`}  alt='' />
      <h2>{title}</h2>
      <span> - {author} - </span>
      <p>{content}</p>
      
   
      </div>
}     
      <Link to='/' ><p>Back</p></Link>
    </div>
  );
}

export default Hblog;
