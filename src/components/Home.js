import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAllContest, joinContest } from '../actions/contest';
import Leagues from "./Leagues";

let contestsData = [];
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

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadAllContest());
    } else {
      props.history.push("/login");
    }
  }, [dispatch, isLoggedIn, props.history])

  const goToContest = (e, contestId) => {
    console.warn(`contests size :${contests}`);
    e.preventDefault();
    props.history.push("/contest");
  }


  const joinLeauge = (e) => { 
    e.preventDefault();
    dispatch(joinContest(joiningCode));
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
    return <Leagues />
  }

  return (
    <div>
      <ul>
        <h1>League </h1>

        <div className="form-group">
          <div className="ui left action input">
            <button className="ui teal labeled icon button" onClick={(event) => joinLeauge(event)}>
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
