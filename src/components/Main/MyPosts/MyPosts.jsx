import React from "react";
import styleSelect from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    
    let postsListArray =  props.postArray.map((el) => {
        return <Post message={el.message} like={el.like}/>
    });

    return(
            <div className={styleSelect.myposts_wrapper}>
                <h3>My posts</h3>
                <div>
                    New post
                    <div>
                    <textarea></textarea>
                    </div>
                    <button onClick={()=>{alert('hello')}}>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={styleSelect.posts}>
                    {postsListArray}
                </div>
            </div>
    );
}

export default MyPosts;