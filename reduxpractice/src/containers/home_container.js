import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { artistListAll } from '../actions';
import { artistList } from '../actions';
import { bindActionCreators } from 'redux';

import Search from '../components/search';
import Artistlist from '../components/artistlist';


class HomeContainer extends Component {

    state = {
        artists: []
    }

    //Actions are ready, now I need to dispatch an action to bind it to the state.
    componentWillMount() {
        this.props.artistListAll();
     
        //console.log(this.props.artists)
    }



    getKeywords = (event) => {
        let key = event.target.value;


        this.props.artistList(key)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Search keywords={this.getKeywords} />
                <Artistlist artists={this.props.artists.artistList} />
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        artists: state.artists
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ artistListAll, artistList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)