import React from 'react';
import getProcedureInfo from "../../utils/getLabelData.js";
import './header.css';

export default function Header(props) {
    console.log(props)
    const procedureInfo = getProcedureInfo(props.procedureId)
    console.log(procedureInfo)
    return (
        <>
            <div className="header">
                <h1>
                    {procedureInfo.label}
                </h1>
                <p> {procedureInfo.label_detailed}</p>
            </div>
        </>
    );
}

