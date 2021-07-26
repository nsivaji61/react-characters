import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Episodes extends Component {
	static propTypes = {
		data: PropTypes.array,
	};
	renderEpisodes() {
		const { data } = this.props;
		return data.map((episode) => {
			return (
				<React.Fragment>
					<tr>
						<td>{episode}</td>
					</tr>
				</React.Fragment>
			);
		});
	}
	render() {
		return (
			<React.Fragment>
				<table className='table table-striped'>
					<tbody>
						<tr>{this.renderEpisodes()}</tr>
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}
