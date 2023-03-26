import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import Icon from "../Icon";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href='/sale'>특별 할인</NavLink>
          <NavLink href='/new'>새로 나온 제품</NavLink>
          <NavLink href='/men'>남자를 위한 제품</NavLink>
          <NavLink href='/women'>여자를 위한 제품</NavLink>
          <NavLink href='/kids'>아동을 위한 제품</NavLink>
          <NavLink href='/kids'>어르신을 위한 제품</NavLink>

          <NavLink href='/collections'>나이키의 모든 의류가 있습니다</NavLink>
        </DesktopNav>
        <MobileNav>
          <UnstyledButton>
            <Icon id='shopping-bag' />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id='search' />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu' />
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const DesktopNav = styled.nav`
  display: none;
  gap: clamp(1.9rem, 3vw + 1rem, 10rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;
const MobileNav = styled.nav`
  width: 100%;
  display: flex;
  gap: 24px;
  justify-content: end;
  margin: 0px 0px;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
