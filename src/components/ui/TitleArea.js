import React from 'react';
import { MDBRow, MDBCol, MDBIcon  } from 'mdbreact';


const TitleArea = ({ name, icon, color }) => (
    <MDBCol>
        <MDBRow className="d-flex flex-row justify-content-between title-area">
            
            <MDBCol className="d-flex flex-column mb-2">
                <h4>
                    <MDBIcon 
                        icon={icon} 
                        className={`${(color === 'normal') ? 'black-text' : color} mr-2`}
                    />
                    {name}
                    <span id="elipsis" className="mx-3">...</span>
                </h4>
                <p id="date">Thursday, August 29</p>
            </MDBCol>

            <MDBCol className="d-flex flex-row justify-content-end">
                <p className="mr-2">
                    <MDBIcon far icon="lightbulb" /> 
                    Today
                </p>
                <p className="ml-1">
                    <MDBIcon icon="sort" />
                    Sort
                </p>
            </MDBCol>

        </MDBRow>
    </MDBCol>
)

export default TitleArea;