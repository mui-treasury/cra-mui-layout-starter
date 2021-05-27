import React from "react";

import Box from "@material-ui/core/Box";
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
  InsetContainer,
  InsetSidebar,
  InsetAvoidingView,
  Footer,
} from "@mui-treasury/layout";

import Menu from "@material-ui/icons/Menu";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

/**
 * This library is for demo purpose only, don't use it in production.
 * yarn remove @mui-treasury/mockup
 */
import {
  HeaderMockup,
  ContentMockup,
  NavSidebarMockup,
  FooterMockup,
  LinkGroup,
} from "@mui-treasury/mockup/layout";

const Blog = () => {
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
              position: "relative",
              height: 64,
            },
          },
        },
        leftEdgeSidebar: {
          config: {
            xs: {
              variant: "temporary",
              width: "auto",
            },
          },
        },
        rightInsetSidebar: {
          config: {
            md: {
              position: "fixed",
              width: 256,
              headerMagnetEnabled: true,
            },
          },
        },
      }}
    >
      <CssBaseline />
      <Header
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.05"
              : "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <HeaderMockup
          sx={{ py: 0 }}
          trigger={
            <EdgeTrigger target={{ anchor: "left", field: "open" }}>
              {(open, setOpen) => (
                <IconButton onClick={() => setOpen(!open)}>
                  {open ? <KeyboardArrowLeft /> : <Menu />}
                </IconButton>
              )}
            </EdgeTrigger>
          }
        />
      </Header>
      <EdgeSidebar anchor="left">
        <SidebarContent>
          <NavSidebarMockup />
        </SidebarContent>
      </EdgeSidebar>
      <Content>
        <InsetContainer
          rightSidebar={
            <InsetSidebar sx={{ bgcolor: "grey.50", pl: 2, pt: 3 }}>
              <LinkGroup />
              <br />
              <br />
              <LinkGroup />
            </InsetSidebar>
          }
        >
          <Box sx={{ py: 3, pr: { xs: 0, md: 5 } }}>
            <ContentMockup />
          </Box>
        </InsetContainer>
      </Content>
      <Footer
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.07)"
              : "grey.50",
        }}
      >
        <Container>
          <InsetAvoidingView sx={{ pr: 5 }}>
            <FooterMockup disableGutters />
          </InsetAvoidingView>
        </Container>
      </Footer>
    </Root>
  );
};

export default Blog;
