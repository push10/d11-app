import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAllContest } from '../actions/contest';

let contestsData = []
const Home = (props) => {
  const { contests } = useSelector(state => {
    if (state.contest.data !== undefined) {
      contestsData = state.contest.data
      return contestsData;
    }
    return state.contest.data
  });



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllContest());
  }, [dispatch])

  const goToContest = (e, contestId) => {
    e.preventDefault();
    props.history.push("/contest");
  }



  const renderList = () => {
    return contestsData.map((contest) => {
      return <li className='item' key={contest.id}>
       <a href='!#' onClick={(e)=>goToContest(e, contest.id)}> {contest.name} </a>
      </li>
    })
  }

  return (
    <div>
      <ul>
        Constest :
        {renderList()}
      </ul>
    </div>

  );
}





export default Home;
