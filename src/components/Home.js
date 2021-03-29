import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAllContest } from '../actions/contest';


const Home = (props) => {
  const [contestData, setContestData] = useState([]);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const { contests } = useSelector(state => state.contests !== undefined ? state.contests : []);

  const dispatch = useDispatch();

  useEffect(() => {
   const resp =  dispatch(loadAllContest());
    console.log('resp===>', resp);
    console.log("######", contests);
  }, [])

  const goToContest = (e, contestId) => {
    e.preventDefault();
    console.log("in useEffect -->", isLoggedIn, message);
    console.log("1-------->", contestId);
    props.history.push("/contest");
    // setContests();
  }
  let renderContestList = (contests) => {
    if (contests !== undefined) {
      contests.map(item => (
        <li key={item.id}>
          <a href='!#' onClick={(event) => {
            goToContest(event, item.id)
          }}  >{item.name}</a>
        </li>
      ))
    }

  }

  return (
    <div>
      <ul>
        {renderContestList(contests)}
      </ul>
    </div>

  );


}




export default Home;
