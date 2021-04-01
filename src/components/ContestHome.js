import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Match from './Match'

import { loadAllMatches } from '../actions/contest';

let matchesData = [];
const Home = (props) => { 
  const { matches } = useSelector(state => { 
    if (state.contest.data !== undefined) {
      matchesData = state.contest.data
      return matchesData;
    }
    return state.contest.data
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllMatches());
    console.log(`matches state ${matches}`);
  }, [dispatch])


  const renderList = () => {
    if (matchesData) {

      return matchesData.map((match) => {
        if (match.hasOwnProperty('team1')) {
          return (<Match key={match.id} match={match} />)
        }
      })
    }
  }
  return (
    <div>
      {renderList()}
    </div>

  );
}
export default Home;
