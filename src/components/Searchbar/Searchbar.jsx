
import { Component } from 'react'

class Searchbar extends Component {
	state = {
		value: '',
	}

	// handleChange = ({ target: { value } }) => {
	// 	this.setState({ value })
	// }
	handleChange = (e) => {
		// this.setState({ value:e.target.value })
		const { target } = e
		const { value } = target
		this.setState({ value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.handleSearch(this.state.value)
	}

	render() {
		return (
            <>
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        class="input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </form>
            </header>				
			</>
		)
	}
}

export default Searchbar

