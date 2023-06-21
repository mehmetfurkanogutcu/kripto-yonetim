import { useState } from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { common } from "@mui/material/colors";

import { Button } from "react-bootstrap";


const LeftMenuItem = ({item} : any) => {

    
    const [open, setOpen] = useState(false)

    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span className={item.path}>
                        {item.title}    
                    </span> 
                    <Button onClick={() => setOpen(!open)} variant="link"
                    ><ArrowDropDownIcon  fontSize="medium" sx={{ color: common["white"] }} /></Button>
                </div>

                <div className="sidebar-content">
                    { item.childrens.map((child: any, index: any) => <LeftMenuItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "/"} className="sidebar-item plain singular-item">
                {item.title}
            </a>
        )
    }
}

export default LeftMenuItem