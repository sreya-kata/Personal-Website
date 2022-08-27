import styled from "styled-components";
import banner from "../../../assets/banner.png";
import { devices } from "../../../constants/devices";

const Banner = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3em;

  @media ${devices.laptop} {
    margin-top: 4em;
    background: url(${banner});
    background-position: 0 30%;
  }
`;

const HalfColumn = styled.div`
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 50%;
  }
`;

const TextColumn = styled.div`
  @media ${devices.mobile} {
    padding-left: 3em;
    padding-right: 3em;
  }
  @media ${devices.laptop} {
    padding-left: 6em;
    padding-right: 0;
  }
`;
const BannerImage = styled.img`
  @media ${devices.mobile} {
    width: 90%;
    margin-top: 2rem;
  }
  @media ${devices.laptop} {
    width: auto;
    margin-top: 0;
  }
`;

export { Banner, HalfColumn, TextColumn, BannerImage };
