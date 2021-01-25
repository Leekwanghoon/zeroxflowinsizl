import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import setting from '../../Images/images/images/setting.png';
import {Upload} from '../Icons';
const SPAN = styled.span`
    font-size:18pt;
    margin-right:10pt;
    color:#707070;
    margin-left:20pt;
`;
const Img = styled.img``;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }),
);

type Props = {
  datas:any;
  setIsClickUpload:any;
  setIsClickImport:any;
}

export default function ToggleButton({datas,setIsClickUpload,setIsClickImport}:Props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const ExcelUpload = (event: React.MouseEvent<EventTarget>) => {
    handleClose(event);
    setIsClickUpload(true);
  }
  const ExcelImport = (event: React.MouseEvent<EventTarget>) => {
    handleClose(event);
    setIsClickImport(true);
  }

  return (
    <div className={classes.root}>
      <div style={{
        display:"flex",alignItems:'center'
      }}>
        <SPAN>엑셀 파일로 한번에 올리기</SPAN>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Upload size="24px" />
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={(event:React.MouseEvent<EventTarget>) => ExcelUpload(event)}>엑셀 업로드</MenuItem>
                    <MenuItem onClick={(event:React.MouseEvent<EventTarget>) => ExcelImport(event)}><label htmlFor="excelFile">엑셀 파일 받아오기</label></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
