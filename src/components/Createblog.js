import React, { useState } from "react";
import "./Createblog.css";
import axios from "../axios";

function Createblog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [filename, setFilename] = useState("");
  const [msg, setMsg] = useState("");

  const onChangeFile = (e) => {
    setFilename(e.target.files[0])
  } 
  
  const sentOnclick = (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    formData.append('blogimage', filename);


    setTitle("");
    setAuthor("");
    setContent("");

    axios
      .post("/blogs/add", formData)
      .then((res) => setMsg(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={sentOnclick}
      encType="multipart/form-data"
      className="addblog"
    >
      <h2>ADD NEW BLOG</h2>
      <p>{msg}</p>
      <br />
      <label>TITLE</label>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <br />
      <br />
      <label>AUTHOR</label>
      <br />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="author"
      />
      <br />
      <br />
      <label>CONTENT</label>
      <br />
      <textarea
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="content"
        className='txtaa'
      />
      <div>
        <label htmlFor='file' >Choose Image</label>
        <input type='file' filename='blogimage'
        onChange={onChangeFile}
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Createblog;
