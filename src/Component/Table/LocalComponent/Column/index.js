import React from "react";

import style from "../../style.module.css"

const Column = ({ columns = [], handelSorting }) => {
    return columns?.map((item, index) => (
        <th onClick={!!item?.sort ? handelSorting.bind(null, item.accessor) : () => {}}
            key={"tableColumn_" + index} className={`${style.th} ${!!item?.sort ? style.pointer : ""}`}>
            {item.Header} {!!item?.sort ? <span>&#8645;</span> : ""}
        </th>
    ));
}

export default Column;