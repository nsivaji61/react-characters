import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends PureComponent {
	static proTypes = {
		next: PropTypes.string,
		previous: PropTypes.string,
		total: PropTypes.number,
		onAdd: PropTypes.func,
		onNext: PropTypes.func,
		onPrevious: PropTypes.func,
	};
	render() {
		const { next, previous, onAdd, onNext, onPrevious, total } = this.props;
		return (
			<React.Fragment>
				<div className='col-sm-3'>
					<button
						type='button'
						className='btn btn-primary btn-lg'
						onClick={onAdd}>
						Add Character
					</button>
				</div>
				<div className='col-sm-3'>
					{previous ? (
						<button
							type='button'
							className='btn btn-primary btn-lg'
							onClick={onPrevious}>
							Previous
						</button>
					) : null}
				</div>
				<div className='col-sm-3'>
					{next ? (
						<button
							type='button'
							className='btn btn-primary btn-lg'
							onClick={onNext}>
							Next
						</button>
					) : null}
				</div>
				<div className='col-sm-3'>
					<h1 class='display-5'>Total : {total}</h1>
				</div>
			</React.Fragment>
		);
	}
}
