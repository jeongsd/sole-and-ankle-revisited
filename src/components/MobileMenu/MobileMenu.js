/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";

const NavLink = styled.a`
  display: block;
  font-family: "Raleway";
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  --color: ${COLORS.gray[900]};
  color: var(--color);
  text-decoration: none;
  text-transform: uppercase;
`;
const Nav = styled.nav`
  display: grid;
  gap: 22px;
`;

const InfoLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  line-height: 16px;

  color: ${COLORS.gray[700]};
`;

const Footer = styled.footer`
  display: grid;
  gap: 16px;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlay style={{ background: "hsla(0, 100%, 100%, 0.9)" }} isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContent
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: 250,
          zIndex: 123132,
          background: "white",
          height: "100%",
          padding: 32,
        }}
      >
        <Body>
          <CloseButtonWrapper>
            <UnstyledButton onClick={onDismiss}>
              <VisuallyHidden>Close</VisuallyHidden>
              <Icon id='close' />
            </UnstyledButton>
          </CloseButtonWrapper>

          <Nav>
            <NavLink
              style={{
                ["--color"]: COLORS.secondary,
              }}
              href='/sale'
            >
              Sale
            </NavLink>
            <NavLink href='/new'>New&nbsp;Releases</NavLink>
            <NavLink href='/men'>Men</NavLink>
            <NavLink href='/women'>Women</NavLink>
            <NavLink href='/kids'>Kids</NavLink>
            <NavLink href='/collections'>Collections</NavLink>
          </Nav>
          <Footer>
            <InfoLink href='/terms'>Terms and Conditions</InfoLink>
            <InfoLink href='/privacy'>Privacy Policy</InfoLink>
            <InfoLink href='/contact'>Contact Us</InfoLink>
          </Footer>
        </Body>
      </DialogContent>
    </DialogOverlay>
  );
};

export default MobileMenu;

const Body = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
