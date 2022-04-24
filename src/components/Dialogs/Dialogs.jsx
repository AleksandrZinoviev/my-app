import React from "react";
import { NavLink } from "react-router-dom";
import styleSelect from "./Dialogs.module.css";

const DialogItem = (props) => {

    let path = "/dialogs/user_" + props.url;

    return (
        <li className={styleSelect.dialogs_item}>
    <NavLink to={path}>{props.name}</NavLink>
    
    </li>
    )
}

const Messageitem = (props) => {
    return (
        <li className={styleSelect.message_item}>{props.msg}</li>
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
                <Messageitem msg="Hello"/>
                <Messageitem msg="How are you"/>
                <Messageitem msg="i`m fine and you"/>
                <Messageitem msg="i`m very old and i tired"/>
                <Messageitem msg="Hi, i`m User_4 is so cool"/>
                <Messageitem msg="bored"/>
                <Messageitem msg="I would like hm i dont no i would like"/>
                
            </ul>
        </div>
    </div>)
}

export default Dialogs;