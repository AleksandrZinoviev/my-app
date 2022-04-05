import React from "react";
import styleSelect from "./Post.module.css";

const Post = () => {
    return(
        <div className={styleSelect.item}>
            <img className={styleSelect.userAvatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UrsgBefCKKTmqYxdMJqqjj5AfVQT-_iaMVMmf5D-twqMYJqTbXwBwB4rvDeVGTXiZec&usqp=CAU"/>
                post 1
                <div>
                    <span>Like</span>
                </div>
        </div>              
    );
}

export default Post;