import React from "react";
import styleSelect from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {

    let postArray = [
        {id: 0, message: "Hi, how are you?", like: 20},
        {id: 1, message: "It`s my first post.", like: 60}
    ]

    return(
            <div className={styleSelect.myposts_wrapper}>
                <h3>My posts</h3>
                <div>
                    New post
                    <div>
                    <textarea></textarea>
                    </div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={styleSelect.posts}>
                    <Post message={postArray[0].message} like={postArray[0].like}/>
                    <Post message={postArray[1].message} like={postArray[1].like}/>
                </div>
            </div>
    );
}

export default MyPosts;