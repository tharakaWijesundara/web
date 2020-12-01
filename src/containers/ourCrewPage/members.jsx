import React from "react";
import styled from "styled-components";
import Membercard from "../../components/member";
import './members.css';

import TharakaImg from "../../assets/team/tharaka.jpg";
import WaasImg from "../../assets/team/waas.jpg";
import SamareImg from "../../assets/team/samare.jpg";
import KalharaImg from "../../assets/team/kalhara.jpg";
import RashanImg from "../../assets/team/rashan.jpg";
import DasunImg from "../../assets/team/dasun.jpg";
import ThusaraImg from "../../assets/team/thusara.jpg";
import ThisalImg from "../../assets/team/thisal.jpeg";
import AnjuImg from "../../assets/team/anju.jpeg";

import { MDBContainer } from "mdbreact"

import { Row } from "reactstrap";

const MembersContainer = styled.div`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:20rem;
  z-index: 2;
`;

export default function members() {
    return (
        <MembersContainer>
            <MDBContainer className="memberCardsRowDiv" size="fluid" id="members_section"></MDBContainer>
            <Row className="memberRowElements">
                <Membercard
                    memberName="Tharaka Wijesundara"
                    memberPosition="Co-Founder & CEO"
                    memberImg={TharakaImg}
                    linkedInLink = {"https://www.linkedin.com/in/tharaka-wijesundara/"}
                ></Membercard>
                <Membercard
                    memberName="Nipun Waas"
                    memberPosition="Co-Founder & CTO"
                    memberImg={WaasImg}
                    linkedInLink = {"https://www.linkedin.com/in/nipun-waas/"}
                ></Membercard>
                <Membercard
                    memberName="Tharindu Samarakoon"
                    memberPosition="Head of Project Management"
                    memberImg={SamareImg}
                ></Membercard>

            </Row>
            <Row className="memberRowElements">
                <Membercard
                    memberName="Kalhara Gurugamage"
                    memberPosition="Head of Marketing"
                    memberImg={KalharaImg}
                    linkedInLink = {"https://www.linkedin.com/in/kalhara-gurugamage-574542172/"}
                ></Membercard>
                <Membercard
                    memberName="Tharindu Dasun"
                    memberPosition="Head of Business Development"
                    memberImg={DasunImg}
                ></Membercard>
                <Membercard
                    memberName="Rashan Chanuka"
                    memberPosition="Head of External Operations"
                    memberImg={RashanImg}
                ></Membercard>

            </Row>
            <Row className="memberRowElements">
                <Membercard
                    memberName="Anju Chamantha"
                    memberPosition="Head of Software Development"
                    memberImg={AnjuImg}
                ></Membercard>
                <Membercard
                    memberName="Ravindu Thisal"
                    memberPosition="Head of Finance"
                    memberImg={ThisalImg}
                ></Membercard>
                <Membercard
                    memberName="Thusara Dimuth"
                    memberPosition="Head of Designing"
                    memberImg={ThusaraImg}
                ></Membercard>
            </Row>
        </MembersContainer>
    );
}
