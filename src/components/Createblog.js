import React, { useState } from "react";
import "./Createblog.css";
import axios from "../axios";

function Createblog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [msg, setMsg] = useState("");

  const sentOnclick = (e) => {
    e.preventDefault();

    const blog = {
      title,
      author,
      content,
    };

    setTitle("");
    setAuthor("");
    setContent("");

    axios
      .post("/blogs/add", blog)
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
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Createblog;
