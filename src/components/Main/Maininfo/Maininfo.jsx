import React from "react"
import styleSelect from "./Maininfo.module.css"


const Maininfo = (props) => {
    return (
            <div>
                <div>
                    <img src="https://img1.akspic.ru/previews/9/0/2/6/6/166209/166209-osen-sezon-korichnevyj_cvet-rastenie-ekoregion-550x310.jpg"/>
                </div> 
                <div className={styleSelect.maininfo_discription}> 
                    ava + description
                </div>
            </div>
    )
}

export default Maininfo 