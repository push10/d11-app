import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Image, Icon, Segment, Divider } from 'semantic-ui-react'
import { loadLeagueUserDetails } from '../actions/contest';
import PaginatedTable from "./utility/PaginatedTable";

let leagueData = {};
let matchesData = [];
let columns = [];
const D11Dashboard = (props) => {
    const dispatch = useDispatch();
    const { leagueId } = props.match.params
    useSelector(state => {
        if (state.contest !== undefined && state.contest.leagues !== undefined) {
            leagueData = state.contest.leagues.length !== 0 ? state.contest.leagues[0] : {}
            return leagueData;
        }

        return state.contest.leagues
    });

    useSelector(state => {
        if (state.contest.leagues !== undefined && state.contest.leagues.length > 0) {
            matchesData = []
            state.contest.leagues.map((league) => {
                if (league.match !== undefined) {
                    const matchVar = league.match
                    matchVar.winnerUser = league.winnerUser
                    matchesData.push(matchVar)
                } else {
                    return ''
                }
            })

            return matchesData;
        }
        return state.contest.data
    });
    useEffect(() => {
        dispatch(loadLeagueUserDetails(leagueId))
    }, [dispatch, leagueId])

    const renderMatchDiv = (matchesDataInput) => {
        if (matchesDataInput !== undefined) {
            return matchesDataInput.map((match) => {
                if (match.hasOwnProperty('team1')) {
                    return <th className="ten wide" key={match.id}>
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
                    </th>
                } else {
                    return ''
                }
            })
        }


    }

    const renderTr = (users, winner) => {
        const user = JSON.parse(localStorage.getItem("user")) 
        users.sort((x, y) => { return x.id === user.id ? -1 : y.id === user.id ? 1 : 0; }); 

        return users.map((user) => {
            columns.push({ id: user.id, label: user.firstName, minWidth: 50 , winner});

        })
    }
    const renderMatchColumn = () => {
        if (matchesData !== undefined) {
            // return (renderMatchDiv(matchesData))
        }
    }
    const renderUserRow = () => {
        if (leagueData.league !== undefined && leagueData.league.user !== undefined && Array.isArray(leagueData.league.user)) { 
            return (
                renderTr(leagueData.league.user, leagueData.winnerUser)
            )
        }
    }




    return (
        <React.Fragment>
            <h1>Dashboard</h1>
            {renderMatchColumn()}
            {renderUserRow()}


            <PaginatedTable columnData={columns} rowData={matchesData} />
        </React.Fragment>
    )



}

export default D11Dashboard;