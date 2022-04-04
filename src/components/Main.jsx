import React from "react";
import styleSelect from "./Main.module.css";

const Main = () => {
    return(
        <main className={styleSelect.content}>
            <div>
                <img src="https://img1.akspic.ru/previews/9/0/2/6/6/166209/166209-osen-sezon-korichnevyj_cvet-rastenie-ekoregion-550x310.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
    </main>
    );
}

export default Main;