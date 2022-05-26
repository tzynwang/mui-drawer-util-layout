import React, { memo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import type { MainProps } from './types';

// TODO: 允許透過 props 設定
const DRAWER_WIDTH = `clamp(200px, 25vw, 400px)`;

const NavBar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText
  // TODO: 允許透過 props 控制高度
}));
const Main = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open'
})<MainProps>(({ open, theme }) => ({
  width: open ? `calc(100% - ${DRAWER_WIDTH})` : '100%',
  marginLeft: open ? DRAWER_WIDTH : 0,
  transitionProperty: 'width, margin',
  transitionDuration: `${theme.transitions.duration.shorter}ms`,
  transitionTimingFunction: theme.transitions.easing.easeOut
}));
const Side = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: DRAWER_WIDTH,
    height: 'calc(100vh - 48px)',
    // TODO: 需考慮 NavBar 高度透過 props 控制的情境
    marginTop: '48px',
    border: 'none',
    backgroundColor: theme.palette.grey[800],
    color: 'inherit',
    transitionDuration: `${theme.transitions.duration.shorter}ms`,
    transitionTimingFunction: theme.transitions.easing.easeOut
  }
  // TODO: 小版面時變為蓋過 Main (而非推擠)
}));

function AppLayout(): React.ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <NavBar variant="dense">tool bar</NavBar>
      <Main open={open}>
        <Button onClick={() => setOpen(!open)}>drawer toggle</Button>
      </Main>
      <Side open={open} variant="persistent" anchor="left">
        drawer
      </Side>
    </React.Fragment>
  );
}

export default memo(AppLayout);
