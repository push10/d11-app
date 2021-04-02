import React from "react";

const Leagues = (props) => {
    const { league, goToContest, leagueId } = { ...props }
    console.log('league====>', props);
    return (
        <div className="ui relaxed divided list">
            <div className="item">
                <i className="large users middle aligned icon"></i>
                <div className="content">

                    <div className="header">
                        <a onClick={(e) => goToContest(e, leagueId)}> {league.name} </a>
                    </div>
                    <div className="description">Updated 10 mins ago</div>
                </div>
            </div>

            <div className="ui compact menu">
                <a className="item">
                    <i className="gamepad icon"></i>
                    D11
                </a>
                <a className="item">
                    <i className="gamepad icon"></i>
                    Bet
                </a>
            </div>
        </div>
    )
}



export default Leagues;