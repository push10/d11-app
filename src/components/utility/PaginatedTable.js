import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MatchCard from '../Match/MatchCard';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

var rows = [
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function PaginatedTable(props) {
    console.log(`props ${props.columnData}`);


    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [columnData, setColumnData] = React.useState(props.columnData);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const renderEmptyCoulmn = () => {
        return (
            <TableCell
                key={`empty-col`}
                style={{ minWidth: 50 }} >
            </TableCell>
        )
    }
    const renderColumns = () => {
        if (props.columnData != undefined) {

            return props.columnData.map((column, index) => (
                <TableCell
                    key={`column-${index}`}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}  >
                    {column.label}
                </TableCell>
            ))
        }

    }
    const renderMatchColumn = (match, index) => {
        var value = `${match.team1.name} vs  ${match.team2.name}`;
        return (
            <TableCell key={index} align='right'>
                <MatchCard matchData={match} />
            </TableCell>
        );
    }
    const renderFaces = (rowData, currentUser) =>{ 
    //    console.log(`matc data ${match.id} - winner ${match.winner.id} pure winner ${rowData.winnerUser}`);
    console.log(`${currentUser.id} === ${rowData.winnerUser}`);
       var flag = 2
        if(currentUser !== undefined && rowData.winnerUser != undefined && currentUser.id === rowData.winnerUser.id){
            return (           
                <i class="smile outline big green icon"></i>
            )
        }else if(flag === 2){
            return (           
                <i class="frown outline big red icon"></i>
            )
        }else if(flag === 3){
            return (           
                <i class="smile outline big orange icon"></i>
            ) 
        }
       
    }
    const renderMatcheRows = () => {
        if (props.rowData !== undefined) {
            console.log('row data', props.rowData);
            return props.rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {

                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={`row-${index}`}>
                        {renderMatchColumn(row, index)}
                        {props.columnData.map((column) => { 
                            console.log('==================>',row);
                            return (
                                <TableCell key={`row-cell-${index}`}>
                                    {renderFaces(row, column)}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })
        }
    }


    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {renderEmptyCoulmn()}
                            {renderColumns()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderMatcheRows()}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.rowData !== undefined ? props.rowData.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
