import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 0px 30px #0000001a;
  max-height: 10vh;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
`;
export const Brand = styled.span`
  & .logo {
    margin-right: 3px;
    .logo_icon {
      width: 30px;
      circle {
        fill: #2e1963;
      }
      .b {
        fill: #fff;
      }
    }
  }

  & .name {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #2e1963;
    user-select: none;
  }
`;
export const Group = styled.div`
  width: fit-content;
`;
export const Icon = styled.span`
  .notif_icon {
    width: 30px;
    cursor: pointer;
    circle.b {
      fill: #F6F3FF;
    }
    @media (max-width: 600px) {
      width: 23px;
    }
    path {
      fill: #2e1963;
    }
  }
`;
export const Profile = styled.span`
  position: relative;
  cursor: pointer;
`;
export const Photo = styled.span`
width: 40px;
height: 40px;
border: 2px solid #2E1963;
border-radius: 50%;
text-center;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 15px;
letter-spacing: 1px;
color: #2E1963;
text-align: center;
background: #F6F3FF 0% 0% no-repeat padding-box;
cursor: pointer;

@media(max-width: 600px) {
  width: 30px;
  height: 30px;
  font-size: 12px;
}
`;
export const Name = styled.p`
  font-size: 19px;
  letter-spacing: 0px;
  color: #000000;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;
export const DropdownIcon = styled.span`
  cursor: pointer;
  svg {
    width: 20px;
    .a {
      fill: #000;
    }
    @media (max-width: 600px) {
      width: 18px;
      display: none;
    }
  }
`;
export const Nav = styled.span`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 100;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 99px #00000012;
  border-radius: 10px;
  transform-origin: right top;
  transform: scale(1);
  opacity: 1;
  display: ${({ showNav }) => showNav ? 'block' : 'none'};
  transition: all .2s ease-in-out;
  padding: .5rem 0;
  width: 150px;
`;
export const Ul = styled.ul``;
export const NavItem = styled.li`
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  letter-spacing: 0px;
  color: #000000;
  cursor: pointer;
  > div {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f3f3f3;
    margin-right: 8px;
  }
  :hover {
    background: #cdc8e6;
  }
`;
