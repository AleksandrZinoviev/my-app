import React from "react";
import { NavLink } from "react-router-dom";
import styleSelect from "./Dialogs.module.css";

const DialogItem = (props) => {

    let path = "/dialogs/user_" + props.id;

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

    let dialogsListArray = [

        {id: 0, name: "user_0"},
        {id: 1, name: "user_1"},
        {id: 2, name: "user_2"},
        {id: 3, name: "user_3"},
        {id: 4, name: "user_4"},
        {id: 5, name: "user_5"},
        {id: 6, name: "user_6"}
    ];
    let dialogsItem = dialogsListArray.map((el) => {
       return <DialogItem name={el.name} id={el.id}/>
    });
    let messagesListArray = [
    
        {id: 0, msg: "Hello"},
        {id: 1, msg: "How are you"},
        {id: 2, msg: "i`m fine and you"},
        {id: 3, msg: "i`m very old and i tired"},
        {id: 4, msg: "Hi, i`m User_4 is so cool"},
        {id: 5, msg: "bored"},
        {id: 6, msg: "I would like hm i dont no i would like"}
    ];

    let messagesItem = messagesListArray.map((el) => {
        return <Messageitem msg={el.msg}/>
     });
    return (
    <div className={styleSelect.ccontent}>
        <div className={styleSelect.dialogs}>
            <ul className={styleSelect.dialogs_list}>
                {dialogsItem}
            </ul>
            <ul className={styleSelect.messages_list}>
                {messagesItem}   
            </ul>
        </div>
    </div>)
}

export default Dialogs;