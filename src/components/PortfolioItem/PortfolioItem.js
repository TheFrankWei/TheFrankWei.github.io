import React from 'react';
import { makeStyles } from '@material-ui/core';
import './PortfolioItem.scss';

export const useStyles = makeStyles(theme => ({
  portfolioItem:{
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0',
    transition: 'box-shadow 0.25s',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 2px 1px -2px rgba(0, 0, 0, 0.2)',
    width: '12rem',
    margin: '1rem 1rem',
    height:200,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // font-family: 'Fira Sans', sans-serif;
    textAlign: 'center',
    '&:hover ':{
      boxShadow: '0 6px 12px 0 rgba(0,0,0,0.2)',
    },
  },

  portfolioItem__title:{
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: '10%',
  },

  portfolioItem__desc : {
    fontSize: 12,
    padding: 5,
  },

  portfolioItem__links : {
    marginTop: '10%',
    display: 'flex',
  },
}));

const PortfolioItem = (props) => {
  const classes = useStyles();

  if (props.render) return props.render;
  else
    return (
      <div
        className={classes.portfolioItem}
      >
        <div className={classes.portfolioItem__title}>Badass</div>

        <div className={classes.portfolioItem__desc}>
          My description blah blah blah
        </div>
        <div className={classes.portfolioItem__icon}>
          <i className="fab fa-js" />
          <i className="fab fa-react" />

        </div>
        <div className={classes.portfolioItem__links}>
          <div><a src="#">More</a></div>
          <div><a src="#">Github</a></div>
        </div>
      </div>
    );
};

export default PortfolioItem;