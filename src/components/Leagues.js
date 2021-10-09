import React from "react";

const Leagues = (props) => {
    const { league, goToContest, leagueId, history } = { ...props }

    const goToDashboard = (e) => {
        e.preventDefault();
        console.log('league====>', history);
        history.push("/d11-app/dashboard/1");
    }

    const goToBettingPage = (e) => {
        e.preventDefault(); 
        history.push("/d11-app/betting/1");
    }

    return (
        <div className="ui relaxed divided list">
            <div className="item">
                <i className="large users middle aligned icon"></i>
                <div className="content">
                    <div className="header">
                        <a href='!#' onClick={(e) => goToContest(e, leagueId)}> {league.name} </a>
                    </div>
                    
                </div>
            </div>

            <div className="ui compact menu">
                <a className="item"  href='!#' onClick={(e) => goToDashboard(e)}>
                    <i className="gamepad icon" ></i>
                    D11
                </a>
                <a className="item"  href='#' onClick={(e)=> goToBettingPage(e)} >
                    <i className="gamepad icon" ></i>
                    Bet
                </a>
            </div>
        </div>
    )
}



export default Leagues;