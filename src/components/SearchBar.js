import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  onImputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.onImputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
