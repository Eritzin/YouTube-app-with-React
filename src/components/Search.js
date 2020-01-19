import React from "react";

class Search extends React.Component {
    state = {
        term: ""
    };

    handleOnChange = event => {
       
        this.setState({
            term: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.searchVideo(this.state.term);
        //console.log(event);
    }

    render() {
        return (
            <div className="container">
                <form className="search" onSubmit={this.handleOnSubmit}>
                    <div className="field">
                        <input className="input" type="text"
                            value={this.state.term}
                            onChange={this.handleOnChange}
                        placeholder="search...."/>
                        <button className="searchButton"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>

        )
    }
}

export default Search;