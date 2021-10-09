import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadLeagueUserDetails } from '../actions/contest';
import Charts from "./utility/Charts";
import PaginatedTable from "./utility/PaginatedTable";
import PlainTable from "./utility/PlainTable";

const D11Dashboard = (props) => {


    let leagueData = {};
    let matchesData = [];
    let columns = [];
    let nonPaidUserForLeague = [];
    let userInvestementDetails = []
    let userChartData = []
    
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
            state.contest.leagues.map((league, index) => {
                if (league.match !== undefined) { 
                    const matchVar = league.match
                    matchVar.winnerUser = league.winnerUser
                    matchVar.paymentDone = league.paymentDone
                    matchVar.leagueId = league.league.id
                    matchesData.push(matchVar)
                    if (index === 0) {
                        nonPaidUserForLeague = league.nonPaidUsers
                        userInvestementDetails = league.userInvestementDetails
                    }
                }
                return ''

            })

            return matchesData;
        }
        return state.contest.data
    });
    useEffect(() => {
        dispatch(loadLeagueUserDetails(leagueId))
    }, [dispatch, leagueId])


    const renderTr = (users, winner, leagueId) => {
        const user = JSON.parse(localStorage.getItem("user"))
        columns = []
        users.sort((x, y) => { return x.id === user.id ? -1 : y.id === user.id ? 1 : 0; });

        users.map((userObj) => {
            userChartData.push(buildUserData(userObj,leagueId))
            return columns.push({ id: userObj.id, label: userObj.firstName, minWidth: 50, winner, leagueId });

        })
    }

    const buildUserData = (userObj, leagueId) => {
        var key = `${leagueId}-${userObj.id}` 
        return { id: userObj.id, firstName: userObj.firstName, 
            investmentAmt: userInvestementDetails[key] !== undefined ? userInvestementDetails[key].totalInvestmentAmt : 0 , 
            winningAmt: userInvestementDetails[key] !== undefined ? userInvestementDetails[key].winningAmt : 0 }
    }

    const renderUserRow = () => {
        
        if (leagueData.league !== undefined && leagueData.league.user !== undefined && Array.isArray(leagueData.league.user)) {
            return (
                renderTr(leagueData.league.user, leagueData.winnerUser, leagueData.league.id)
            )
        }

        if (userInvestementDetails !== undefined && userInvestementDetails.length > 0) {
            userInvestementDetails.map(invObj => {

            });
        }
        console.log(`in render user row ${columns.length}`);
    }




    return (
        <React.Fragment>
            <h1>Dashboard</h1>
            {renderUserRow()}

            {/* <Charts userChartData={userChartData} /> */}
            {/* <PaginatedTable columnData={columns} rowData={matchesData} nonPaidUserForLeague={nonPaidUserForLeague} /> */}
            <PlainTable columnData={columns} rowData={matchesData} />

        </React.Fragment>
    )



}

export default D11Dashboard;