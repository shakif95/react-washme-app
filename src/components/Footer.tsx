import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton
} from '@material-ui/core';

import { GraphicEq } from '@material-ui/icons'

export interface IFooterProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const Footer: React.FC<IFooterProps> = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <GraphicEq />
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}

