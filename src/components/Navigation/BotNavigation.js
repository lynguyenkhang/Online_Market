import {
    BottomNavigation,
    BottomNavigationAction,
    Container,
    Hidden
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';






const urls = [
    { title: 'Trang chủ', url: '/market', Icon: HomeIcon },
    { title: 'Đăng tin', url: '/market/post', Icon: CreateIcon },
    { title: 'Tài khoản', url: '/user', Icon: PersonIcon },
    { title: 'Admin', url: '/admin', Icon: SettingsIcon },


]

const useStyles = makeStyles({
    Container: {
        padding: 0,
        position: 'fixed',
        bottom: 0,
        width: '100vw',

    },
    NavRoot: {
        bottom: 0,
        width: '100%',
        height: 65,

    },
    IconRoot: {
        "& svg": { fontSize: '2rem', }
    },
    IconSelected: {
        color: '#035597 !important'
    },

});


function BotNavigation({ page, adminCondition }) {
    const [currentPage, setCurrentPage] = useState(page)
    let history = useHistory()
    const classes = useStyles();

    const handleChange = (event, index) => {
        const { url } = urls[index]
        setCurrentPage(index);
        setTimeout(() => history.push(url), 600)
    };

    return (
        <Hidden mdUp>
            <Container classes={{ root: classes.Container }}>
                <BottomNavigation value={currentPage} onChange={handleChange} className={classes.NavRoot}>
                    {urls.map(({ title, Icon }, index) => {
                        if (index < 3 || adminCondition) {
                            return (
                                <BottomNavigationAction
                                    key={title}
                                    classes={{ root: classes.IconRoot, selected: classes.IconSelected }}
                                    label={title} value={index}
                                    icon={<Icon />}
                                />
                            )
                        }
                    })}
                </BottomNavigation>
            </Container>
        </Hidden>
    )
}

export default BotNavigation
