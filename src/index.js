import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';
import Videolist from './components/video_list';
import VideoDetail from './components/video_details';
const API_Key = 'AIzaSyBc3mH7TiDMqkW8CuHHUwaPr4hsJCD3qzw';

/*YTsearch({key : API_Key, term: 'hollywoodMovies'}, function(data){
    console.log(data);
});


*/

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedvideo: null };

        this.videoSearch('surfboards');
}
videoSearch(term){
 YTsearch({ key: API_Key, term: term}, (videos) => {
            
             this.setState({videos : videos,
              selectedvideo: videos[0]    
          });
   
    });

}

  

        render() {
            const videoSearch =_.debounce((term) => {this.videoSearch(term)},400);
            return ( < div >
                <br />
                < SearchBar onSearchTermChange = {videoSearch} />
                <br /> 
                < VideoDetail video = { this.state.selectedvideo } / > 
                < Videolist onVideoSelect = { selectedvideo => this.setState({ selectedvideo }) }
                videos = { this.state.videos }
                /> 


                < /div>
            );
        }
    }



    ReactDOM.render( < App / > ,
        document.querySelector('.container'));
