import React from 'react';
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import './description.css'

export const OurCrewTitle1 = styled.h1`
    font-family: 'Rubik';
    color: #460c5e;
    font-size: 55px;
    font-weight: bold;
    display: inline-block;

    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;
export const OurCrewTitle2 = styled.h1`
    font-family: 'Rubik';
    color: #DD038F;
    font-size: 55px;
    font-weight: bold;
    display: inline-block;
    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;





export default function description() {
    return (
        <div>
            <Marginer direction="vertical" margin="8em" />
            <OurCrewTitle1>Our <span><OurCrewTitle2>Team</OurCrewTitle2></span></OurCrewTitle1>
            <Marginer direction="vertical" margin="2em" />
            <p className="descParagraph1">
                "Amazing ideas, amazing individuals brings amazing results"{<br />}
            </p>
            <p className="descParagraph2">
                As engineering undergraduates we thrive in technological innovation for modern day problems.
            </p>
            <Marginer direction="vertical" margin="3em" />
        </div>

    );
}
