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

    let messagesListArray = [

        {id: 0, msg: "Hello"},
        {id: 1, msg: "How are you"},
        {id: 2, msg: "i`m fine and you"},
        {id: 3, msg: "i`m very old and i tired"},
        {id: 4, msg: "Hi, i`m User_4 is so cool"},
        {id: 5, msg: "bored"},
        {id: 6, msg: "I would like hm i dont no i would like"}
    ];
        

    return (
    <div className={styleSelect.ccontent}>
        <div className={styleSelect.dialogs}>
            <ul className={styleSelect.dialogs_list}>
               <DialogItem name={dialogsListArray[0].name} id={dialogsListArray[0].id}/>
               <DialogItem name={dialogsListArray[1].name} id={dialogsListArray[1].id}/>
               <DialogItem name={dialogsListArray[2].name} id={dialogsListArray[2].id}/>
               <DialogItem name={dialogsListArray[3].name} id={dialogsListArray[3].id}/>
               <DialogItem name={dialogsListArray[4].name} id={dialogsListArray[4].id}/>
               <DialogItem name={dialogsListArray[5].name} id={dialogsListArray[5].id}/>
               <DialogItem name={dialogsListArray[6].name} id={dialogsListArray[6].id}/>
            </ul>
            <ul className={styleSelect.messages_list}>
                <Messageitem msg={messagesListArray[0].msg}/>
                <Messageitem msg={messagesListArray[1].msg}/>
                <Messageitem msg={messagesListArray[2].msg}/>
                <Messageitem msg={messagesListArray[3].msg}/>
                <Messageitem msg={messagesListArray[4].msg}/>
                <Messageitem msg={messagesListArray[5].msg}/>
                <Messageitem msg={messagesListArray[6].msg}/>
                
            </ul>
        </div>
    </div>)
}

export default Dialogs;