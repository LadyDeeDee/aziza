import React, {useContext} from "react";
import { Context } from "../index";

const CategoryBar = observer(() => {
    const {user} = useContext(Context)
    return (
        
        <div>
        <ul>
            <li>Woman</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

        </ul>
    
        </div>

    )
}
)