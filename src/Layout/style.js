import styled from "styled-components";

export const Container = styled.div`
  .layout {
    position: relative;
    display: flex;
  }
  #sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 30%;
    overflow: hidden;
      max-width: 300px;
    background: #fff;
    z-index: 100;
    transition: left 0.2s ease-in-out;
    @media (max-width: 900px) {
      width: 100%;
      max-width: 300px;
      left: ${({ sideNav }) => (sideNav ? "0" : "-300px")}
    }
  }
  #main {
    margin-top: 10vh;
    width: 100%;
    min-height: 90vh;
    background: #F4F5F9 0% 0% no-repeat padding-box;
    margin-left: 300px;
    @media (max-width: 900px) {
      margin-left: 0;
    }
  }
`;
