import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends PureComponent {
	static propTypes = {
		heading: PropTypes.string,
		show: PropTypes.bool,
	};
	render() {
		const { children, heading, show } = this.props;
		console.log('inside modal component');
		const showHideClassName = show
			? 'modal fade display-block show'
			: 'modal fade display-none';
		return (
			<React.Fragment>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-6'>
							<div className={showHideClassName} aria-hidden='true'>
								<div className='modal-dialog' role='document'>
									<div className='modal-content'>
										<div className='modal-header'>
											<h5 className='modal-title' id='exampleModalLabel'>
												{heading}
											</h5>
										</div>
										<div className='modal-body'>{children}</div>
										<div className='modal-footer'>
											<button
												type='button'
												className='btn btn-secondary'
												onClick={() => this.props.onClose()}>
												Close
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
