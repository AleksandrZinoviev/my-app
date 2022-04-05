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
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
    );
}

export default MyPosts;