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
      </EdgeSidebar>
      <Content>
        <InsetContainer
          rightSidebar={
            <InsetSidebar anchor="right" sx={{ bgcolor: "grey.50" }}>
              <NavSidebarMockup />
            </InsetSidebar>
          }
        >
          <Box sx={{ py: 3, pr: 5, flexGrow: 1 }}>
            <ContentMockup />
          </Box>
        </InsetContainer>
      </Content>
      <Footer>
        <Container>
          <InsetAvoidingView>Footer</InsetAvoidingView>
        </Container>
      </Footer>
    </Root>
  );
};

export default Blog;
