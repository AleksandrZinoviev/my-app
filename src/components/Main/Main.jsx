import React from "react";
import styleSelect from "./Main.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Main = () => {
    return(
        <main>
            <div>
                <img src="https://img1.akspic.ru/previews/9/0/2/6/6/166209/166209-osen-sezon-korichnevyj_cvet-rastenie-ekoregion-550x310.jpg"/>
            </div>
            <div>
                ava + description
            </div>
        <MyPosts />
    </main>
    );
}

export default Main;