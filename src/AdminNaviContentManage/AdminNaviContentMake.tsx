import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Text = styled.span`
    font-size: 19px;
    font-size: bold;
    font-weight: 600;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
      backgroundColor: '#f0f0f0',
      '&:hover': {
        backgroundColor: 'yellow'
      }
    },
  }),
);

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText>
            <Text>콘텐츠만들기</Text>
        </ ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/admin/Edit/mediatool_manage"><ListItem button className={classes.nested}>
          <ListItemText>영상 마법사</ ListItemText>
          </ListItem></Link>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="문장 만들기" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="싱크 맞추기" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="단어 만들기" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="문제 만들기" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
