/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import "./PostData.css";
import { toast } from "react-toastify";

export default function PostData() {
  const [postData, setPostData] = useState({
    title: "",
    logo: "",
    companyName: "",
    position: "",
    description: "",
  });

  const handelChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(postData);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        " http://localhost:9000/jobs",
        postData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }

    setPostData({
      title: "",
      logo: "",
      companyName: "",
      position: "",
      description: "",
    });

    return toast("Add Job Succesfully");
  };
  return (
    <div className="postData container">
      <div className="stylePostData">
        <form onSubmit={handelSubmit} className="input-style">
          <h1>Add New Job</h1>
          <br />
          <h4>Title:</h4>
          <input
            onChange={handelChange}
            type="text"
            name="title"
            value={postData.title}
            placeholder="Title"
            required
          />{" "}
          <br />
          <h4>Logo:</h4>
          <input
            onChange={handelChange}
            type="url"
            name="logo"
            value={postData.logo}
            placeholder="Img url here"
            required
          />{" "}
          <br />
          <h4>Company Name:</h4>
          <input
            onChange={handelChange}
            type="text"
            name="companyName"
            value={postData.companyName}
            placeholder="Company Name"
            required
          />{" "}
          <br />
          <h4>Position:</h4>
          <input
            onChange={handelChange}
            type="text"
            name="position"
            value={postData.position}
            placeholder="Position"
          />{" "}
          <br />
          <h4>Description:</h4>
          <input
            onChange={handelChange}
            type="text"
            name="description"
            value={postData.description}
            placeholder="Description"
            required
          />{" "}
          <br />
          <button type="submit ">Add New Job</button>
        </form>
      </div>
    </div>
  );
}
