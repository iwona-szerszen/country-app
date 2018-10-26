import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions-countries.js';
import CountryFlagList from '../presentational/flag-list.component';

class ContinentsContainer extends Component {
	constructor(props) {
		super(props);
	}
	chooseContinent(event) {
		this.props.dispatch(setContinent(event.target.value));
	}
	deleteCountry(id) {
		this.props.dispatch(deleteCountry(id));
	}
	componentDidMount() {
		this.props.dispatch(setContinent('Europa'));
	}
	render() {
		return (
			<div>
				<select onChange={event => this.chooseContinent(event)}>
					<option value='Europa'>Europe</option>
					<option value='Afryka'>Africa</option>
				</select>
				<CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
			</div>
		);
	}
}

const mapStateToProps = store => ({
	visibleCountries: store.countriesReducer.visibleCountries
});

export default connect(mapStateToProps)(ContinentsContainer);