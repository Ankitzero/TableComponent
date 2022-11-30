import React, { useState } from "react";
import _ from "lodash";
import moment from "moment";

import Column from "./LocalComponent/Column";
import Row from "./LocalComponent/Row";

import style from "./style.module.css";

const Table = ({ dataFromAPI, columns }) => {

    const [dataFormAPIState, setDataFromAPIState] = useState(dataFromAPI);
    const [ordering, setOrdering] = useState(true);

    const handelSorting = (key) => {
        let chars = null;
        if (typeof (dataFromAPI[0][key]) === "object") {
            chars = _.chain(dataFromAPI)
                .toPairs()
                .map(([key, ...obj]) => ({
                    key,
                    ...obj[0],
                    anykeyxyz: obj[0].person.name
                }))
                .orderBy(['anykeyxyz'], [ordering ? "asc" : "desc"])
                .map(({ anykeyxyz, ...obj }) => obj)
                .value()
        } else if (moment(dataFromAPI[0][key], 'DD/MM/YYYY', true).isValid()) {
            chars = dataFromAPI.sort(function (a, b) {
                var aa = a[key].split('/').reverse().join(),
                    bb = b[key].split('/').reverse().join();
                return ordering ? (aa < bb ? -1 : (aa > bb ? 1 : 0)) : (aa > bb ? -1 : (aa < bb ? 1 : 0));
            });
        } else {
            chars = _.orderBy(dataFromAPI, [`${key}`], [ordering ? "asc" : "desc"]);
        }
        setDataFromAPIState(dataFromAPI => chars);
        setOrdering(ordering => !ordering);
    }

    return (
        <div className={style.outerContainer}>
            <div className={style.tableContainer}>
                <table className={style.table}>
                    <thead>
                        <tr className={style.trstyle}>
                            <Column columns={columns} handelSorting={handelSorting} />
                        </tr>
                    </thead>
                    <tbody>
                        {dataFormAPIState?.map((item, index) => {
                            const currentRowData = columns?.map((innerItem, i) => <Row
                                key={innerItem.accessor + "cell" + i}
                                innerItem={innerItem}
                                item={item}
                            />)
                            return <tr key={"list-item" + index}>
                                {currentRowData}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;