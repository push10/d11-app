import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAllMatches } from '../actions/contest';

let matchesData = [];
const Home = (props) => {
  //const [contests, setContests] = useState([]);
  const { matches } = useSelector(state => {
    console.log(`state ${state}`);
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
    console.log(`matchesData ${matchesData}`);
    if(matchesData){
      
      return matchesData.map((match) => {
        if(match.hasOwnProperty('team1')){
         
          console.log('team', match.team1.name);
          return <div key={match.id}>{match.team1.name} vs {match.team2.name}</div>
        }
        console.log(`insdie${match}`);
        
      })
    }
    
  }

  return (
    <div>
      Contest Home page
      {renderList()}
    </div>

  );
}




export default Home;
