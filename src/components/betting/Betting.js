
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodaysMatches } from '../../actions/betting';
import BettingDetails from './BettingDetails'

const Betting = (props) => {
    const dispatch = useDispatch();
    const [betPerMatch, setBetPerMatch] = useState([]);

    let matchesData = []
    useSelector(state => {
        if (state.betting !== undefined && state.betting.data.length > 0) {
            matchesData = state.betting.data
            return matchesData
        }
    });



    useEffect(() => {
        dispatch(loadTodaysMatches());
    }, [dispatch])


    const renderMatch = () => {
        if (matchesData) {
            console.log('=========>',betPerMatch);
            return matchesData.map((match, index) => { 
                return (<BettingDetails key={match.id} match={match} betAmount='' betPerMatch = {betPerMatch} setBetPerMatch={setBetPerMatch} />)
            })
        }
    }
    return (
        <React.Fragment>
            <h1>Coming soon...</h1>
            {renderMatch()}
        </React.Fragment>
    )
}

export default Betting;