import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadUserLeauges, loadAllMatches , loadLeagueUserDetails} from '../actions/contest';

let leagueData = {};
let matchesData = [];
const D11Dashboard = (props) => {
    const dispatch = useDispatch();
    const { leagues } = useSelector(state => {
        if (state.contest !== undefined && state.contest.leagues !== undefined) {
            leagueData = state.contest.leagues.length !== 0 ? state.contest.leagues[0] : {}
            console.log(`leagueData in dashboard ${leagueData}`);
            return leagueData;
        }

        return state.contest.leagues
    });

    const { matches } = useSelector(state => {
        if (state.contest.data !== undefined) {
            matchesData = state.contest.data
            return matchesData;
        }
        return state.contest.data
    });
    useEffect(() => {
        // dispatch(loadLeagueUserDetails(1))
        dispatch(loadUserLeauges());
        dispatch(loadAllMatches());
        
    }, [dispatch])

    const renderMatchDiv = (matchesData) => {
        return matchesData.map((match) => {
            if (match.hasOwnProperty('team1')) {
                return <th  key={match.id}>{match.team1.shortName} vs {match.team2.shortName}</th>
            }
        })
    }
    const renderTd = () => {
        return matchesData.map((match) => {
            if (match.hasOwnProperty('team1')) {
                return <td  key={match.id}>{match.team1.shortName}</td>
            }
        })
    }
    const renderTr = (users) => {
        return users.map((user) => {
            return (<tr key={user.id}>
                <td>{user.firstName} {user.lastName}</td>
                    {renderTd()}
                </tr>)
        })
    }
    const renderMatchColumn = () => {
        if (matchesData !== undefined) {
            return (renderMatchDiv(matchesData))
        }
    }
    const renderUserRow = () => {
        console.log(`users----------->${leagueData}`);
        if (leagueData.user !== undefined && Array.isArray(leagueData.user)) {
            return (
                renderTr(leagueData.user)
            )
        }
    }

    const renderLeagueUserDetails = ()=>{

    }


    return (
        <React.Fragment>
            <table className="ui definition table">
                <thead >
                    <tr>
                        <th className='no_border'></th>
                        {renderMatchColumn()}
                    </tr></thead>
                <tbody>
                    {renderUserRow()}
                </tbody>
            </table>

        </React.Fragment>
    )



}

export default D11Dashboard;