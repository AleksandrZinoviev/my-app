import React from "react";
import styleSelect from "./Main.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Maininfo from "./Maininfo/Maininfo";

const Main = (props) => {
    
    return(
        <main className="">
            <Maininfo />
            <MyPosts postArray={props.postArray}/>
        </main>
    );
}

export default Main;