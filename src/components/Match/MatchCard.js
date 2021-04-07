import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Moment from 'moment';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { blueGrey,yellow } from '@material-ui/core/colors';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

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

const renderTooltipInfo = (matchData) => {
    return `Match No: ${matchData.matchNo}, Venue: ${matchData.venue}, ${matchData.city}`
}

const renderDayOrNightIcon = (matchData)=>{
    var currentHour = Moment(matchData.schedule).format("HH");
    console.log('here');
    if(currentHour < 16){
        return <WbSunnyIcon style={{ color: yellow[500] }}/>
    }else{
        return <NightsStayIcon  style={{ color: blueGrey[500] }}/>
    }
}
const MatchCard = (props) => {
    const classes = useStyles();
    const matchData = props.matchData;

    if (matchData !== undefined) {
        return (
            <>
                <div className={classes.root}>
                    <Tooltip title={renderTooltipInfo(matchData)}>
                        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/images/${matchData.team1.shortName}.png`} />
                    </Tooltip>
                    <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/images/vs_t.png`} className={classes.small} />
                    <Tooltip title={renderTooltipInfo(matchData)}>
                        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/images/${matchData.team2.shortName}.png`} />
                    </Tooltip>
                    {renderDayOrNightIcon(matchData)}
                   
                </div>

            </>
        );
    } else {
        return ''
    }

}

export default MatchCard;