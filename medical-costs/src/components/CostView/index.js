import React from 'react';
import getCostData from "../../utils/getCostData.js";
import PlaceIcon from '@mui/icons-material/Place';
import HelpIcon from '@mui/icons-material/Help';
import BoxPlot from "../BoxPlot/index.js"
import './cost_view.css';

export default function CostView(props) {
    const costData = getCostData(props.stateCode, props.procedureId)
    return (
        //https://getbootstrap.com/docs/4.0/layout/grid/
        <div className="container-fluid">
            <div className="row">
                <div className='col-3 box-style'>
                    <h2>How much does it cost?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className='col-3 box-style'>
                    <div className="row">
                        <div className="col-12">
                            <p style={{ fontSize: "25px" }}>Average Price <HelpIcon /></p>
                        </div>
                        <div className="col-12" style={{ fontSize: "96px" }}>
                            ${costData.percent50}
                        </div>
                        <div className="col-12">
                            {/* //https://getbootstrap.com/docs/4.0/utilities/flex/ */}
                            <div className="d-flex">
                                <PlaceIcon />
                                {props.state}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-5 box-style'>
                    <div className="row">
                        <div className="col-12">
                            <p style={{ fontSize: "25px" }}>Typical Price Range <HelpIcon /></p>
                        </div>
                        <div className="col-12">
                            <BoxPlot stateCode={props.stateCode} procedureId={props.procedureId} />
                        </div>
                        <div className="col-12">
                            <div className="d-flex">
                                <PlaceIcon />
                                {props.state}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}