import React from "react";
import styleSelect from "./Main.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Maininfo from "./Maininfo/Maininfo";

const Main = () => {
    return(
        <main className="">
            <Maininfo />
            <MyPosts />
        </main>
    );
}

export default Main;