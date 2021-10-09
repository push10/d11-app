import React from 'react';
import DataTable from 'react-data-table-component';
import Moment from 'moment'; 
import LinearProgress from '@material-ui/core/LinearProgress';

const columns = [
    {
        name: 'Match No',
        selector: row => row.matchNo,
    },
    {
        name: 'Date',
        selector: row => row.date,
    },
    {
        name: 'Team 1',
        selector: row => row.team1,
    },
    {
        name: 'VS' 
    },
    {
        name: 'Team 2',
        selector: row => row.team2,
    },
    {
        name: 'Winner',
        selector: row => row.winner,
    },
];

const data = []

const buildRowObject = (rows) => { 
    rows.map((row) => { 
        data.push({ id: row.id,   matchNo: row.matchNo, 
                            date:Moment(row.schedule).format('DD MMM, YYYY'), 
                            team1: row.team1.name, 
                            team2: row.team2.name, 
                            winner : row.winnerUser != null ? row.winnerUser.username : 'TBD'
                        }) 
    })
}

export default function PlainTable(props) {      

    if(props.rowData !== undefined && props.rowData.length > 0){ 
        buildRowObject(props.rowData) 
        return (
            <DataTable
                columns={columns}
                data={data}
            />
        );
    }

    return (
        <div> 
            loading...
            <LinearProgress />
        </div>
    );
}

