import React, { useRef } from 'react';
import { useSpring, useTrail, useChain, animated } from 'react-spring';
import Letter from './../../components/Letter/Letter.js';
import IconButton from './../../components/IconButton/IconButton.js';
import { makeStyles } from '@material-ui/core';
import GitHub from './../../images/github.svg'
import Linkedin from './../../images/linkedin.svg'
import Flickr from './../../images/flickr.svg'

export const useStyles = makeStyles(theme => ({
  contact:{
    height: '100vh',
  },
  contact_title:{
    display: 'block',
    textAlign: 'center',
    paddingTop: '12%',
  },
  contact_icons:{
    textAlign: 'center',
  },
}));


const Contact = () =>{
  const classes = useStyles();

  const contactTitleRef = useRef();
  const contactTitleAnimation = useSpring({opacity: 1,
                          ref: contactTitleRef,
                          from: {opacity: 0,}})
  
  const contactLinkRef = useRef();
  const contactLinkAnimation = useSpring({opacity: 1, marginTop: 10,
                          ref: contactLinkRef,
                          from: {opacity: 0, marginTop: 100,}})

    useChain([contactTitleRef, contactLinkRef], [0,0.6])
    return (
      <div className = {classes.contact} id = 'Contact'>
      <animated.h1 style={contactTitleAnimation} className={classes.contact_title}>
        <Letter style={{fontSize: 100,}} value="C"/>
        <Letter style={{fontSize: 100,}} value="O"/>
        <Letter style={{fontSize: 100,}} value="N"/>
        <Letter style={{fontSize: 100,}} value="T"/>
        <Letter style={{fontSize: 100,}} value="A"/>
        <Letter style={{fontSize: 100,}} value="C"/>
        <Letter style={{fontSize: 100,}} value="T"/>
      </animated.h1>

      <animated.div style={contactLinkAnimation} className = {classes.contact_icons}>
        <IconButton style={{height:80, width:80, marginLeft: '5%', marginRight: '5%',}} href='https://github.com/TheFrankWei' src={GitHub} target="_blank" rel="noopener"  alt="Github"/>
        <IconButton style={{height:80, width:80,  marginLeft: '5%', marginRight: '5%',}} href='https://www.linkedin.com/in/TheFrankWei/' src={Linkedin} iconName='linkedIn' target="_blank" rel="noopener"  alt="Linkedin"/>
        <IconButton style={{height:80, width:80, marginLeft: '5%', marginRight: '5%',}} href='https://www.flickr.com/photos/144760780@N08/?' src={Flickr} iconName='flickr' target="_blank" rel="noopener"  alt="Flickr"/>
      </animated.div>
      </div>
    );
  }


export default Contact;