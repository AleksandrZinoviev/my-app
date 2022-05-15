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

    
    let dialogsItem = props.dialogsListArray.map((el) => {
       return <DialogItem name={el.name} id={el.id}/>
    });

    let messagesItem = props.messagesListArray.map((el) => {
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