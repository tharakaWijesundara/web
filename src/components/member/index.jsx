import React from 'react';
import styled from "styled-components";

import './memberCard.css'

const MemberContainer = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    // background-color: #880e4f;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        width: 150px;
        height: 150px;
    }
    @media screen and (min-width:700px) and (max-width: 1300px) {
        width: 200px;
        height: 200px;
    }

    
`;

const MemberImg = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    display: flex;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    z-index:10;
    @media screen and (max-width: 480px) {
        width: 150px;
        height: 150px;
    }
    @media screen and (min-width: 700px) and (max-width: 1300px) {
        width: 200px;
        height: 200px;
    }
    &:hover {
        border-width: 8px;
        border-color: #2867B2;
        border-style: outset;
    }

`;


export default function memberCard(props) {
    const { memberImg, memberPosition, memberName, linkedInLink } = props;
    return (
        <div className="memberCardDiv" >
            <a href={linkedInLink} target="_blank">
                <MemberContainer>
                    <MemberImg src={memberImg} />
                </MemberContainer>
            </a>

            <h1 className="memberCardName">{memberName}</h1>
            <h1 className="memberCardPosition">{memberPosition}</h1>
        </div>
    )
} 