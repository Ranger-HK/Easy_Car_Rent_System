import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {Dialog, DialogContent, DialogTitle } from "@mui/material";
import CommonButton from "../common/Button";
import LoginUser from "../../pages/Session/Login/userLogin";
import CloseIcon from "@mui/icons-material/Close";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      date:new Date().toLocaleDateString(),
      time:new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    let date = new Date().toLocaleDateString();
    console.log(date)
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  tick(){
    this.setState({
      date:new Date().toLocaleDateString(),
      time:new Date().toLocaleTimeString()

    })
  }


  render() {
    const { classes } = this.props;
    return (
        <AppBar color="transparent" position={"fixed"}>
          <nav className="flex justify-between items-center h-16 px-12 bg-zinc-800 bg-opacity-25 p-10 backdrop-blur-sm">
            <div>
              <Typography
                  variant={"h4"}
                  className="text-white font-dosis font-bold tracking-wide select-none"
              >
                Easy Car Rental
              </Typography>
            </div>


            <div className="flex w-1/12 justify-end gap-3">
              <div className="flex items-center text-white mr-5 text-sm">{this.state.date}
              </div>
              <div className="flex items-center text-white mr-5 text-sm">{this.state.time}
              </div>
              <CommonButton
                  size="large"
                  variant="outlined"
                  label="Login"
                  className="text-white border-white hover:bg-white hover:text-black"
                  onClick={() => this.setState({ open: true })}
              />
            </div>
          </nav>

          <Dialog
              open={this.state.open}
              maxWidth="md"
              classes={{ paper: classes.dialogWraper }}
          >
            <DialogTitle style={{ paddingRight: "0px" }}>
              <div style={{ display: "flex" }}>
                <Typography
                    variant="h4"
                    component="div"
                    className="font-bold flex-grow"
                    style={{ flexGrow: 1 }}
                >
                  Login
                </Typography>

                <IconButton onClick={() => this.setState({ open: false })}>
                  <CloseIcon />
                </IconButton>
              </div>
            </DialogTitle>
            <DialogContent dividers>
              <LoginUser />
            </DialogContent>
          </Dialog>
        </AppBar>
    );
  }
}

export default withStyles(styleSheet)(NavBar);
