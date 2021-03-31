import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAllContest } from '../actions/contest';

let contestsData = [];
const Home = (props) => {
  const { isLoggedIn } = useSelector(state => state.auth);

  const { contests } = useSelector(state => {
    if (state.contest.data !== undefined) {
      contestsData = state.contest.data
      return contestsData;
    }
    return state.contest.data
  });



  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn){
      dispatch(loadAllContest());
    }else{
      props.history.push("/login");
    }
  }, [dispatch, isLoggedIn, props.history])

  const goToContest = (e, contestId) => {
    console.warn(`contests size :${contests}`);
    e.preventDefault();
    props.history.push("/contest");
  }



  const renderList = () => {

    return contestsData.map((contest) => {
      return <li className='item' key={contest.id}>
        <a href='!#' onClick={(e) => goToContest(e, contest.id)}> {contest.name} </a>
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
