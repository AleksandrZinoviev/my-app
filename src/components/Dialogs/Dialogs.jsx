import React from "react";
import { NavLink } from "react-router-dom";
import styleSelect from "./Dialogs.module.css";

const DialogItem = (props) => {
    return (
        <li className={styleSelect.dialogs_item}>
    <NavLink to={"/dialogs/user_" + props.url}>{props.name}</NavLink>
    
    </li>
    )
}
const Dialogs = (props) => {
    return (
    <div className={styleSelect.ccontent}>
        <div className={styleSelect.dialogs}>
            <ul className={styleSelect.dialogs_list}>
               <DialogItem name="user_0" url="0"/>
               <DialogItem name="user_1" url="1"/>
               <DialogItem name="user_3" url="2"/>
               <DialogItem name="user_2" url="3"/>
               <DialogItem name="user_4" url="4"/>
               <DialogItem name="user_5" url="5"/>
               <DialogItem name="user_6" url="6"/>
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