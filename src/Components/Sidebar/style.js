import styled from "styled-components";

export const Border = styled.div`
  height: 63px;
  width: 3px;
  background: #2e1963 0% 0% no-repeat padding-box;
  border-radius: 0px 5px 5px 0px;
  visibility: hidden;
`;
export const Icon = styled.span`
  background-color: #f5f5f5;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  svg {
    width: 45px;
    height: 45px;
    opacity: 1;
  }
  #Wallet {
    width: 20px;
    height: 20px;
    .a {
      fill: #b9b9b9;
    }
  }
  #Dashboard {
    width: 28px;
  }
`;
export const Group = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  height: 63px;
  width: 100%;
  transition: all 0.2s ease, font-size 0s ease;
  padding: 20px;
  span {
    margin-left: 20px;
  }
`;
export const Container = styled.div`
  height: 100%;
  background: #fff;
  width: 100%;
  nav {
    width: 100%;
  }
  ul {
    padding-top: calc(2rem);
    padding-bottom: 5rem;
    padding-left:0; 
  }
  li {
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0px;
    text-transform: uppercase;
    margin-top: 10px;
    .active {
      color: #2e1963;
    }
    a {
      color: #000000;
      text-decoration: none;
    }
    :hover {
      color: #ece5ff;

      ${Icon} {
        background-color: #e5dbfe;
        svg {
          width: 40px;
          fill: #2e1963;
          .a {
            fill: #e5dbfe;
          }
          .b {
            fill: #2e1963;
          }
        }
        #Wallet {
          width: 18px;
          .a {
            fill: #2e1963;
          }
        }
        #Dashboard {
          width: 25px;
        }
      }
      ${Border} {
        visibility: visible;
        transform: scale(1);
        transform-origin: left bottom;
        margin-right: 10px;
      }
      ${Group} {
        font-size: 13px;
        margin: 0 10px;
        border-radius: 10px;
        background: #ece5ff 0% 0% no-repeat padding-box;
        color: #2e1963;
      }
    }
  }
`;
