import React,{ Component} from 'react';


class SearchBar extends Component{
	constructor() {
		super()
		this.state = {
			term : ''
		};
	}
	onInputChange(term) {
       this.setState({term});
       this.props.onSearchTermChange(term);

	}
		
	render(){
	return (
		<div className="search-Bar">
	
	<input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
	
  
</div>
);
}
}

export default SearchBar;