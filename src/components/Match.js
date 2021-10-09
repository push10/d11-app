import React from "react";
import { Grid, Image, Icon, Segment, Divider } from 'semantic-ui-react'
import Moment from 'moment';
const Match = (props) => {


    const { match } = { ...props } 
    return (
        <div>
            <ul>
                <h2>Match  {match.matchNo}: {Moment(match.schedule).format('DD MMM, YYYY')}</h2>
                
                <Segment color='red'>
                    <Grid centered columns={4}>
                        <Grid.Column>
                            <Segment color='yellow'>
                                <Segment >
                                    <Grid columns={2} >
                                        <Divider vertical>
                                            <Icon name='handshake' color='red' />
                                        </Divider>
                                        <Grid.Row verticalAlign='middle'>
                                            <Grid.Column className='align_right'>
                                                <Image className='floatRight' src={process.env.PUBLIC_URL + `/images/${match.team1.shortName}.png`} size='mini' />
                                            </Grid.Column>
                                            <Grid.Column textAlign='right'>
                                                <Image className='floatRight' src={process.env.PUBLIC_URL + `/images/${match.team2.shortName}.png`} size='mini' />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            {match.team1.name} <br />
                            {match.team2.name}
                        </Grid.Column>
                        <Grid.Column>
                            Time {Moment(match.schedule).format('hh:mm A')} 
                            <br />Venue: {match.venue}, {match.city}
                        </Grid.Column>
                        <Grid.Column>
                           
                        </Grid.Column>
                    </Grid>

                </Segment>
            </ul>
        </div>

    );
}
export default Match;