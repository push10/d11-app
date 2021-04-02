import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { joinLeauge, loadUserLeauges } from '../actions/contest';
import Leagues from "./Leagues";

let contestsData = [];
let leagueData = [];
const Home = (props) => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const [joiningCode, setJoiningCode] = useState('');

  const { contests } = useSelector(state => {
    if (state.contest.data !== undefined) {
      contestsData = state.contest.data
      return contestsData;
    }
    return state.contest.data
  });

  const { leagues } = useSelector(state => {
    if (state.contest.leagues !== undefined) {
      leagueData = state.contest.leagues
      return leagueData;
    }

    return state.contest.leagues
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadUserLeauges());
    } else {
      props.history.push("/login");
    }
  }, [dispatch, isLoggedIn, props.history])

  const goToContest = (e, contestId) => { 
    if (e !== undefined) {
      e.preventDefault();
      props.history.push("/contest");
    }
  }


  const joinLeaugeEvent = (e) => {
    e.preventDefault();
    dispatch(joinLeauge(joiningCode));
    setJoiningCode('')

  }


  const renderList = () => {
    return contestsData.map((contest) => {
      return <li className='item' key={contest.id}>
        <a href='!#' onClick={(e) => goToContest(e, contest.id)}> {contest.name} </a>
      </li>
    })
  }

  const renderLeagues = () => {
    if (leagueData !== undefined) {
      return leagueData.map((league) => {
        return <Leagues key={league.id} league={league} goToContest={(e)=>goToContest(e,league.contest.id)} leaguesId={league.id} />
      })
    }

  }

  return (
    <div>
      <ul>
        <h1>League </h1>

        <div className="form-group">
          <div className="ui left action input">
            <button className="ui teal labeled icon button" onClick={(event) => joinLeaugeEvent(event)}>
              <i className="trophy icon"></i>
            Join
          </button>
            <input type="text" value={joiningCode} onChange={e => setJoiningCode(e.target.value)} placeholder='Enter league code' />
          </div>
        </div>

        {renderLeagues()}
      </ul>
    </div>

  );
}





export default Home;
