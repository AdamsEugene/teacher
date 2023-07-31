/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState } from "react";
import { styled } from "styled-components";
import { Link, Outlet, useMatches } from "react-router-dom";
import { Affix, Breadcrumb } from "rsuite";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import Header from "../_shared/components/header/Header";

export default function Home() {
  const matches = useMatches();
  const [navbar, setNavbar] = useState<boolean>();

  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match: { handle: { crumb: () => string } }) =>
      Boolean((match.handle as { crumb: () => string })?.crumb)
    )
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match: { handle: { crumb: () => string }; pathname: any }) => ({
      name: (match.handle as { crumb: () => string })?.crumb(),
      path: match.pathname,
    }));
  // console.log(crumbs);

  const MyBreadcrumb = () =>
    crumbs.length > 1 ? (
      <Breadcrumb separator={<AngleRightIcon />}>
        {crumbs
          .slice(0, crumbs.length - 1)
          .map(
            (
              crumb: {
                path: string;
                name:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: React.Key | null | undefined
            ) => (
              <Breadcrumb.Item as={NavLink} to={crumb.path} key={index}>
                {crumb.name}
              </Breadcrumb.Item>
            )
          )}
        <Breadcrumb.Item active>
          {crumbs[crumbs.length - 1].name}
        </Breadcrumb.Item>
      </Breadcrumb>
    ) : null;

  const NavLink = React.forwardRef<
    unknown,
    { to: string; children?: React.ReactNode }
  >((props, ref) => {
    const { to, children } = props;
    return (
      <Link
        to={to}
        ref={ref as React.Ref<HTMLAnchorElement> | undefined}
        children={children}
      />
    );
  });

  return (
    <HomeWrapper>
      <Affix onChange={setNavbar} style={{ width: "100%" }}>
        <HeaderWrapper $navbar={navbar}>
          <Header />
        </HeaderWrapper>
      </Affix>
      <MyBreadcrumb />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh);
  padding-top: 1px;
`;

const HeaderWrapper = styled.div<{ $navbar?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  z-index: 999;
  background: ${({ theme, $navbar }) =>
    $navbar ? theme.colors.background.cards : "transparent"};

  transition: background 0.5s ease-in-out;
`;

const OutletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100%);
`;
