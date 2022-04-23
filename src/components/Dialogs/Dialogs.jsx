import React from "react";
import styleSelect from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
    <div className={styleSelect.ccontent}>
        <div className={styleSelect.dialogs}>
            <ul className={styleSelect.dialogs_list}>
                <li className={styleSelect.dialogs_item}>User_0</li>
                <li className={styleSelect.dialogs_item}>User_1</li>
                <li className={styleSelect.dialogs_item}>User_2</li>
                <li className={styleSelect.dialogs_item}>User_3</li>
                <li className={styleSelect.dialogs_item}>User_4</li>
                <li className={styleSelect.dialogs_item}>User_5</li>
                <li className={styleSelect.dialogs_item}>User_6</li>
            </ul>
            <ul className={styleSelect.messages_list}>
                <li className={styleSelect.message_item}>Hello</li>
                <li className={styleSelect.message_item}>How are you</li>
                <li className={styleSelect.message_item}>i`m fine and you</li>
                <li className={styleSelect.message_item}>i`m very old and i tired</li>
                <li className={styleSelect.message_item}>Hi, i`m User_4 is so cool</li>
                <li className={styleSelect.message_item}>bored</li>
                <li className={styleSelect.message_item}>I would like hm i dont no i would like</li>
            </ul>
        </div>
    </div>)
}

export default Dialogs;