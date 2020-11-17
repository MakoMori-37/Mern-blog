import React, {useState, useEffect} from "react";
import './Editblog.css'
import axios from '../axios'


const Editblog = props => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [msg, setMsg] = useState('')
    
    const sentOnclick = (e) => {
        e.preventDefault();

        const blog = {
            title,
            author,
            content
        }
        
        setTitle('')
        setAuthor('')
        setContent('')
        
        axios.put(`/blogs/update/${props.match.params.id}`, blog)
        .then(res => setMsg(res.data))
        .catch(err => console.log(err))


    }

    useEffect(() => {
    axios
      .get(`/blogs/${props.match.params.id}`)
      .then(res => [
        setTitle(res.data.title),
        setAuthor(res.data.author),
        setContent(res.data.content)
      ])
      .catch(err => console.log(err));
  }, []);

  return (
    <form onSubmit={sentOnclick} encType='multipart/form-data' className='addblog' >
      <h2>EDIT BLOG</h2>
  <p className='altt' >{msg}</p>
  <br/>
      <label>TITLE</label><br/>
      <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='title' />
      <br/><br/>
      <label>AUTHOR</label><br/>
      <input type='text' value={author} onChange={e => setAuthor(e.target.value)} placeholder='author' />
      <br/><br/>
      <label>CONTENT</label><br/>
      <textarea type='text' value={content} onChange={e => setContent(e.target.value)} placeholder='content' />
      <br/>
       <button type='submit' >Submit</button>         
    </form>
  );
}

export default Editblog;
