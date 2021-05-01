import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles({
  list: {
    width: '100vw',
    maxWidth: 400,
  },
  closeBtn: {
    marginLeft: 'auto',
    display: 'block',
  },


  editBtn: {
    textTransform: 'none',
    padding: '0px 9px',
    margin: '.5rem 0px',
  }
});

export default function EditInforDrawerBtn() {
  const classes = useStyles();
  const [ show, setShow ] = useState(false)

  const {photoURL} = useSelector(state => state.auth.user)

  const toggleDrawer = open => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setShow(open)
  };

  const list = () => (
    <div
      className={classes.list}
    //   role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >

      <Button
        className={classes.closeBtn}
        onClick={toggleDrawer(false)}
        children="Đóng"
        size="large"
      />
      <Divider />

      <List>

        <ListItem>
          <Avatar src={photoURL}/>
        </ListItem>

                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))} */}
      </List>
      <List>
                    {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))} */}
      </List>

    </div>
  );

  return (
    <div>
        <React.Fragment>
            <Button
                onClick={toggleDrawer(true)}
                className={classes.editBtn}
                variant="outlined"
                children="Chỉnh sửa thông tin" 
            />

          <Drawer anchor="right" open={show} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
