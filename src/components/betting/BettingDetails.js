import React from "react";
import { Grid, Image, Input, Segment, Button } from 'semantic-ui-react'

import Moment from 'moment';
const BettingDetails = (props) => {
    const { match,betAmount, betPerMatch, setBetPerMatch } = { ...props }
    const regexp = new RegExp(`^-?[0-9]*$`);
    console.log('........',betPerMatch);
    const betValidation = (e) => {
        const value = e.target.value;
        if (regexp.test(value)) {
            setBetPerMatch({ betAmount: value })
        } else if (match.betAmount != undefined) {
            setBetPerMatch({ betAmount: match.bet.betAmount })
        } else {
            setBetPerMatch({ betAmount: '' })
        }
    };


    return (
        <div>
            <ul>
                <h2>Match  {match.matchNo}: {Moment(match.schedule).format('DD MMM, YYYY')}</h2>
                <h2>Time {Moment(match.schedule).format('hh:mm A')}
                    <br />Venue: {match.venue}, {match.city}</h2>

                <Segment color='red'>
                    <Grid centered columns={3}>
                        <Grid.Column>
                            <Image src={process.env.PUBLIC_URL + `/images/${match.team1.shortName}.png`} size='big' />

                        </Grid.Column>
                        <Grid.Column >
                            <div className="text-align-center">
                                <Input
                                    value={betAmount}
                                    icon='rupee'
                                    iconPosition='left'
                                    placeholder='Enter bet in X of 10'
                                    onChange={(e) => { betValidation(e) }}
                                />
                                <br />
                                <br />
                                <br />
                                <Button positive>Positive Button</Button>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <Image className='floatRight' src={process.env.PUBLIC_URL + `/images/${match.team2.shortName}.png`} size='big' />
                        </Grid.Column>

                    </Grid>

                </Segment>
            </ul>
        </div>

    );
}
export default BettingDetails;