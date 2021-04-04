import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const MatchCard = (props) => {
    const classes = useStyles();
    const matchData = props.matchData;

    if (matchData !== undefined) {
        return (
            <div className={classes.root}>
                {matchData.matchNo}
                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/images/${matchData.team1.shortName}.png`} />
                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/images/vs_t.png`} className={classes.small} />
                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/images/${matchData.team2.shortName}.png`} />
            </div>
        );
    } else {
        return ''
    }

}

export default MatchCard;