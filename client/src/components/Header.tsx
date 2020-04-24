import React from 'react'
import { Typography } from '@material-ui/core';

const Header = () => {
    return (
        <div className="title">
          <img className="logo" src={require("../images/Watching_Anime-512.png")} alt="dude watching anime"/>
          <Typography variant="h2" component="h1">Find My Anime</Typography>
        </div>
    )
}
export default Header;