import React, { Component } from "react";
import {
  withStyles,
} from "@material-ui/core";

import {fetchLinks} from "../modules/actions/linksAction";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

class links extends Component {

    componentDidMount(){
        this.props.fetchLinks();
    }

    render() {

        return (
        <div>
            <div>
            
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    links: state.links,
    isFetching: state.isFetching,
    allstate: state
});

const mapDispatchToProps = dispatch => ({
    fetchLinks: () => dispatch(fetchLinks())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(links));