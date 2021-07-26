import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Character extends Component {
	static propTypes = {
		data: PropTypes.object,
		onEpisodesClick: PropTypes.func,
	};
	constructor(props) {
		super(props);
		this.state = { children: '' };
	}
	render() {
		const { data, onEpisodesClick } = this.props;
		return (
			<React.Fragment>
				<div className='card'>
					<img src={data.image} className='card-img-top' alt='alt' />
					<div className='card-body'>
						<div className='card-title'>
							<ul className='list-group list-group-flush'>
								<li key={`${data.id}-${data.name}`} className='list-group-item'>
									{<h5>{data.name}</h5>}
								</li>
								<li
									key={`${data.id}-${data.gender}`}
									className='list-group-item'>
									{data.gender}
								</li>
								<li
									key={`${data.id}-${data.species}`}
									className='list-group-item'>
									{data.species}
								</li>
								<li
									key={`${data.id}-${data.status}`}
									className='list-group-item'>
									{data.status}
								</li>
								<li
									key={`${data.id}-${data.status}`}
									className='list-group-item'>
									<button
										type='button'
										class='btn btn-link'
										onClick={() => onEpisodesClick(data.id)}>
										Episodes
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
