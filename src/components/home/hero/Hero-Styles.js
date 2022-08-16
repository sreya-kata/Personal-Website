import styled from "styled-components";
import banner from "../../../assets/banner.png";

const Banner = styled.section`
  background: url(${banner});
  background-position: 0 30%;
  display: flex;
  margin-top: 4em;
`;

const HalfColumn = styled.div`
  width: 50%;
`;

const TextColumn = styled.div`
  padding-left: 6em;
`;

export { Banner, HalfColumn, TextColumn };
