import React from "react";

import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";

import {
  Root,
  Header,
  EdgeSidebar,
  EdgeTrigger,
  SidebarContent,
  Content,
  Footer,
} from "@mui-treasury/layout";

import Menu from "@material-ui/icons/Menu";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

/**
 * This library is for demo purpose only, don't use it in production.
 * yarn remove @mui-treasury/mockup
 */
import {
  HeaderMockup,
  ContentMockup,
  NavSidebarMockup,
} from "@mui-treasury/mockup/layout";

function Dashboard() {
  return (
    <Root
      scheme={{
        header: {
          config: {
            xs: {
              position: "sticky",
              height: 56,
            },
            md: {
              position: "sticky",
              height: 64,
              clipped: true,
            },
          },
        },
        leftEdgeSidebar: {
          config: {
            xs: {
              variant: "temporary",
              width: "auto",
            },
            md: {
              variant: "permanent",
              width: 256,
              collapsible: true,
              collapsedWidth: 64,
            },
          },
        },
      }}
    >
      <CssBaseline />
      <Header>
        <HeaderMockup
          trigger={
            <EdgeTrigger target={{ anchor: "left", field: "open" }}>
              {(open, setOpen) => (
                <IconButton onClick={() => setOpen(!open)}>
                  {open ? <KeyboardArrowLeft /> : <Menu />}
                </IconButton>
              )}
            </EdgeTrigger>
          }
          sx={{ px: 2, py: 1, flex: 1 }}
        />
      </Header>
      <EdgeSidebar anchor="left">
        <SidebarContent>
          <NavSidebarMockup />
        </SidebarContent>
        <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
          {(collapsed, setCollapsed) => (
            <ButtonBase
              onClick={() => setCollapsed(!collapsed)}
              sx={{
                minHeight: 40,
                width: "100%",
                bgcolor: "grey.100",
                borderTop: "1px solid",
                borderColor: "grey.200",
              }}
            >
              {collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </ButtonBase>
          )}
        </EdgeTrigger>
      </EdgeSidebar>
      <Content>
        <Container sx={{ py: 3 }} maxWidth="md">
          <ContentMockup />
        </Container>
      </Content>
      <Footer>Footer</Footer>
    </Root>
  );
}

export default Dashboard;
