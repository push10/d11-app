import React from 'react';
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


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function PaginatedTable(props) { 


    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10); 
    const nonPaidUserForLeague = props.nonPaidUserForLeague

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
        if (props.columnData !== undefined) {

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
        return (
            <TableCell key={index} align='right'>
                <MatchCard matchData={match} />
               
            </TableCell>
        );
    }
    const renderFaces = (rowData, columnData) => {
        var key = rowData.leagueId + "-" + rowData.id + "-" + columnData.id;

        if (nonPaidUserForLeague.indexOf(key) > -1) {
            return (
                <i className="ban big red icon"></i>
            )
        } else if (columnData !== undefined && rowData.winnerUser != undefined && columnData.id === rowData.winnerUser.id) {
            return (
                <i className="smile outline big green icon"></i>
            )
        } else {
            return (
                <i className="smile outline big orange icon"></i>
            )
        }

    }
    const renderMatcheRows = () => {
        if (props.rowData !== undefined) { 
            return props.rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {

                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={`row-${index}`}>
                        {renderMatchColumn(row, index)}
                        {props.columnData.map((column) => { 
                            return (
                                <TableCell key={`row-cell-${index}-${column.id}`}>
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
