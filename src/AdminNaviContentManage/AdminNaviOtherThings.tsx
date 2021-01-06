import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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

export default function AdminNaviOtherThings() {
  const classes = useStyles();
  
  return (
    <List
      component="nav"
      className={classes.root}
    >
      <ListItem button>
        <ListItemText>
            <Link to="/admin/AdminMode/Category/category_manage"><Text>카테고리 관리</Text></Link>
        </ ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
        <Link to="/admin/AdminMode/PlayList/play_list_manage"><Text>플레이리스트 관리</Text></Link>
        </ ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
        <Link to="/admin/AdminMode/Banner/banner_manage"><Text>배너 관리</Text></Link>
        </ ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
        <Link to="/admin/AdminMode/Member/member_manage"><Text>회원 관리</Text></Link>
        </ ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
        <Link to="/admin/AdminMode/Organization/organization_manage"><Text>기관 관리</Text></Link>
        </ ListItemText>
      </ListItem>
    </List>
  );
}
