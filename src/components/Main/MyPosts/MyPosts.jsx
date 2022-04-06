import React from "react";
import styleSelect from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
    return(
            <div>
                My posts
                <div>
                    New post
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={styleSelect.posts}>
                    <Post message="Hi, how are you?" like="20"/>
                    <Post message="It`s my first post." like="60"/>
                </div>
            </div>
    );
}

export default MyPosts;