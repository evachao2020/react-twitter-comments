import React from "react";

class SearchBar extends React.Component {
    state = {
        value1 : 'curry'
    }

    onSubmit = evt => {
        evt.preventDefault()   //阻止form表單的默認事件
        console.log(this.state.value1)
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.value1}
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" value={this.state.value1}
                               onChange={event => this.setState({value1: event.target.value})}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                            anyone else.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default SearchBar