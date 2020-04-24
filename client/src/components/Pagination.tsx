import React from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    paginationArrowContainer: {
        border: "1px solid grey",
    },
    paginationArrow: {
        padding: "5px",
    }
}))

const Pagination: React.FC<any> =  (props) => {
    const classes = useStyles();

    return (
        <div className="pagination-container">
            <div className={classes.paginationArrowContainer}>
                <ArrowBackIos /> 
            </div>
            <p onClick={() => props.setCurrentPage(1)} className="page-number">1</p>
            <p onClick={() => props.setCurrentPage(2)} className="page-number">2</p>
            <p onClick={() => props.setCurrentPage(3)} className="page-number">3</p>
            <div className={classes.paginationArrowContainer}>
                <ArrowForwardIos /> 
            </div>
        </div>
    )
}

export default Pagination;