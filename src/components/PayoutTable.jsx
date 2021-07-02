import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography  , Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';


function createData(id, PayoutID, Source, Date, amount) {
    return { id, PayoutID, Source, Date, amount };
}

const rows = [
    createData(0, 'KLA12578DHQ', 'Vel pellentesque ornare', '25th November, 2020',  "$1,200"),
    createData(1, 'KLA12578DHQ', 'Vel pellentesque ornare', '25th November, 2020', "$1,200"),
    createData(2, 'KLA12578DHQ', 'Vel pellentesque ornare', '25th November, 2020', '$1,200'),
    createData(3, 'KLA12578DHQ', 'Vel pellentesque ornare', '25th November, 2020', '$1,200'),
    createData(4, 'KLA12578DHQ', 'Vel pellentesque ornare', '25th November, 2021', '$1,200'),
];

function preventDefault(event) {
    event.preventDefault();
  }

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    payoutbtn:{
        backgroundColor:" #3D8F83",
        color: '#fff'
    },
    textSize:{
        fontSize: '18px',
        fontWeight: 700,
    },
      date_icon :{
        marginLeft: "1rem",
        color: '#2C665D',
      },
      date_Button:{
          border: "1px solid #ebebeb",
          borderRadius: "4px",
          marginRight: '1rem',
          fontSize: "14px"
      }

  }));

const PayoutTable = () => {
    const classes = useStyles();
    return (
        <>
            <div className="payout_table">
                <Typography id="textSize" className={classes.textSize} variant='h5'>Payout table</Typography>

                <div className="moe">
                    <Button id='search'> <input id='inputSearch' type="text" placeholder='Search something...' /><SearchIcon id='searchIcon'/></Button>
                    {/* <input  type="date" id="start"  name="trip-start"
                    value="2018-07-22"
                    min="2018-01-01" max="2018-12-31"></input> */}
                    <Button className={classes.date_Button}>March 2021 <DateRangeOutlinedIcon className={classes.date_icon}/> </Button>
                    <Button className={classes.payoutbtn} variant="contained" >
                        Payout
                    </Button>
                </div>
            </div>

         <React.Fragment>
            <Table size="small">
                <TableHead>
                    <TableRow className="table_head">
                        <TableCell className="tabel_cell">Payout ID</TableCell>
                        <TableCell className="tabel_cell">Source</TableCell>
                        <TableCell className="tabel_cell">Date</TableCell>
                        <TableCell className="tabel_cell">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.PayoutID}</TableCell>
                        <TableCell>{row.Source}</TableCell>
                        <TableCell>{row.Date}</TableCell>
                        <TableCell>{row.amount}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Button className="seemore" color="primary" href="#" onClick={preventDefault}>
                    See more 
                </Button>
            </div>
        </React.Fragment>
        </>
    )
}

export default PayoutTable
