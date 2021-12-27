import React, { useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-location";
import Menu from "@mui/material/Menu";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

interface BarProps<T> {
  carCount?: number;
  showMenu?: boolean;
  keyExtractor: (item: T, index: number) => string;
  items: T[];
  render: (item: T) => React.ReactNode;
  renderStart?: () => React.ReactNode;
  renderEnd?: () => React.ReactNode;
}

export default function Bar<T>(props: BarProps<T>) {
  const {
    keyExtractor,
    items,
    render,
    carCount = 0,
    showMenu,
    renderStart,
    renderEnd,
  } = props;
  const [isVisibleMenu, set_isVisibleMenu] = useState(false);

  const buttonRef = useRef<null | HTMLButtonElement>(null);
  const buttonEl = buttonRef.current;

  let openMenu = isVisibleMenu;
  if (buttonEl) {
    openMenu = typeof showMenu !== "undefined" ? showMenu : isVisibleMenu;
  }
  if (carCount < 1) {
    openMenu = false;
  }

  return (
    <AppBar position="sticky" color="transparent">
      <Box bgcolor="white">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              sx={{ flexGrow: 1 }}
              to="/">
              Simple online shop
            </Typography>
            <IconButton
              aria-label="cart"
              ref={buttonRef}
              onClick={() => {
                if (carCount > 0) {
                  set_isVisibleMenu(true);
                }
              }}>
              <StyledBadge
                badgeContent={carCount}
                color="primary"
                invisible={carCount < 1}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={buttonEl}
              open={openMenu}
              onClose={() => set_isVisibleMenu(false)}>
              <Box px={2} py={1} minWidth={250}>
                {typeof renderStart !== "undefined" ? renderStart() : ""}
                <Box component="li">
                  <Typography fontWeight="bold" component="p">
                    Mi lista
                  </Typography>
                </Box>
                {items.map((item, idx) => (
                  <li key={keyExtractor(item, idx)}>{render(item)}</li>
                ))}
                {typeof renderEnd !== "undefined" ? renderEnd() : ""}
              </Box>
            </Menu>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
}
