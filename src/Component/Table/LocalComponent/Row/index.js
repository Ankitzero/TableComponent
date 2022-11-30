import React from "react";

import style from "../../style.module.css";

const Row = ({ innerItem, item}) => {
    return ( 
        !Object.keys(innerItem).includes("cell") ? <td className={style.td}>
                {item[innerItem?.accessor] || "-"}
            </td> : <td className={style.td}>
                {innerItem?.cell(item) || "-"}
            </td>
     );
}
 
export default Row;