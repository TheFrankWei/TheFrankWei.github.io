import React, { useRef }  from 'react';
import PortfolioItem from './../../components/PortfolioItem/PortfolioItem.js';
import PortfolioItems from './PortfolioItems.js';
import Letter from './../../components/Letter/Letter.js';
import { useSpring, useTrail, useChain, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  portfolio: {
    "min-height": '100vh',
  },
  portfolio_title:{
    marginLeft: 40,
    display:'block',
    textAlign: 'left',
    paddingTop: '10%',
    paddingLeft: '5%',
  },
  contentGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white',
    flexWrap:'wrap',
  },
  // portfolioItem: {
  //   backgroundColor: '#557282',

  //  '&:hover':{
  //     backgroundColor: '5B7B8C',
  //   },
  // }
}));


const Portfolio = ({refProp, isVisible, id}) => {
  const classes = useStyles();
  const portfolioTitleRef = useRef();
  const portfolioTitleAnimation = useSpring({opacity: isVisible? 1 : 0, marginLeft: isVisible? 40 : 1500,
                            ref: portfolioTitleRef,
                            delay: 300,
                            from: {opacity: 0, marginLeft: 1500,}})
  
  const portfolioItemRef = useRef();
  const portfolioItemAnimation = useTrail(PortfolioItems.length, {
                                  ref: portfolioItemRef,
                                  delay: 500,
                                  opacity: isVisible? 1 : 0 ,
                                  from: { opacity: 0 }, //might have to remove this, check when scrolling works 
                                })


  useChain([portfolioTitleRef, portfolioItemRef], [0, 0.5])
  
  

  return (
   <div ref={refProp} className={classes.portfolio} id={id}>

      <animated.h1 style={portfolioTitleAnimation} className = {classes.portfolio_title}>
        <Letter style={{fontSize: 100,}} value="P"/>
        <Letter style={{fontSize: 100,}} value="O"/>
        <Letter style={{fontSize: 100,}} value="R"/>
        <Letter style={{fontSize: 100,}} value="T"/>
        <Letter style={{fontSize: 100,}} value="F"/>
        <Letter style={{fontSize: 100,}} value="O"/>
        <Letter style={{fontSize: 100,}} value="L"/>
        <Letter style={{fontSize: 100,}} value="I"/>
        <Letter style={{fontSize: 100,}} value="O"/>
      </animated.h1>
     <div className={classes.contentGrid}>
     {/* {PortfolioItems.map((item, i) => (
           <AnimatedPortfolioItem style={portfolioItemAnimation} className={classes.portfolioItem} title={item.title} description={item.description} icons={item.icon} links={item.links} key={i} />
         ))} */}
      {isVisible && portfolioItemAnimation.map(({...rest}, index) => (
        <animated.div style={{...rest}}>
          <PortfolioItem className={classes.portfolioItem} title={PortfolioItems[index].title} description={PortfolioItems[index].description} icons={PortfolioItems[index].icon} links={PortfolioItems[index].links} key={index} />
        </animated.div>  
        ))}
     </div>


   </div>
 );

}
export default Portfolio;
