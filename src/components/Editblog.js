import React, { useState, useEffect } from "react";
import "./Editblog.css";
import axios from "../axios";

const Editblog = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [filename, setFilename] = useState("");
  const [mas, setMas] = useState("");

  const onChangeFile = (e) => {
    setFilename(e.target.files[0]);
  };

  const sentOnclick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("blogimage", filename);

    axios
      .put(`/blogs/update/${props.match.params.id}`, formData)
      .then((res) => setMas(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`/blogs/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setAuthor(res.data.author),
        setContent(res.data.content),
        setFilename(res.data.blogimage),
      ])
      .catch((err) => console.log(err));
  }, [`${props.match.params.id}`]);

  return (
    <form
      onSubmit={sentOnclick}
      encType="multipart/form-data"
      className="addblog"
    >
      <h2>EDIT BLOG</h2>
      <span>{mas}</span>
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

      <label>AUTHOR</label>
      <br />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="author"
      />
      <br />

      <label>CONTENT</label>
      <br />
      <textarea
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="content"
      />

      <div>
        <label htmlFor="file">Choose Image</label>
        <input type="file" filename="blogimage" onChange={onChangeFile} />
      </div>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Editblog;
