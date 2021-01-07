import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer } from '@material-ui/core'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '400px'
    }
}));

export default function SideMenu({ setOpenSideMenu, openSideMenu }) {
    const classes = useStyles();
    return (
        <div>
            <Drawer open={openSideMenu} anchor='right' onClose={() => setOpenSideMenu(false)}>
                <div className={classes.drawer}>
                    <Router>
                        <div>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/users/sign_in">Sign In Another Account</Link>
                                    </li>
                                    <li>
                                        <Link to="/users/sign_out">Sign_out</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Router>
                </div>
            </Drawer>
        </div>
    )
}
