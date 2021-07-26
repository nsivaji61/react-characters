import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddCharacterModal extends Component {
	static propTypes = {
		onClose: PropTypes.func.isRequired,
		onAddCharacter: PropTypes.func.isRequired,
	};
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			gender: '',
			status: '',
			species: '',
			imageSelected: false,
			image: '',
		};
	}
	onFileChange = (event) => {
		//console.log(event);
		var url = URL.createObjectURL(event.target.files[0]);

		this.setState({
			imageSelected: true,
			image: url,
		});
	};
	onSave = () => {
		const { onAddCharacter } = this.props;
		onAddCharacter({
			name: this.state.name,
			gender: this.state.gender,
			status: this.state.status,
			species: this.state.species,
			image: this.state.image,
		});
	};
	onGenderSelect = (event) => {
		console.log(event.target.value);
		this.setState({ gender: event.target.value });
	};

	render() {
		const { show } = this.props;

		console.log('inside modal', show);
		const showHideClassName = show
			? 'modal fade display-block show'
			: 'modal fade display-none';
		const imageClass = this.state.imageSelected
			? 'img-thumbnail display-block'
			: 'display-none';

		return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6'>
						<div className={showHideClassName} aria-hidden='true'>
							<div className='modal-dialog' role='document'>
								<div className='modal-content'>
									<div className='modal-header'>
										<h5 className='modal-title' id='exampleModalLabel'>
											Add Character
										</h5>
									</div>
									<div className='modal-body'>
										<form>
											<div className='form-group form-control-lg'>
												<label>Name</label>
												<input
													type='text'
													className='form-control'
													id='txtName'
													placeholder='Enter Name'
													value={this.state.name}
													onChange={(event) => {
														this.setState({ name: event.target.value });
													}}></input>
											</div>
											<div className='form-group form-control-lg'>
												<label>Status</label>
												<input
													type='text'
													className='form-control'
													id='txtStatus'
													placeholder='Status'
													value={this.state.status}
													onChange={(event) => {
														this.setState({ status: event.target.value });
													}}></input>
											</div>
											<div className='form-group form-control-lg'>
												<label>Species</label>
												<input
													type='text'
													className='form-control'
													id='txtSpecies'
													placeholder='Species'
													value={this.state.species}
													onChange={(event) => {
														this.setState({ species: event.target.value });
													}}></input>
											</div>
											<div className='form-group form-control-lg'>
												<label>Gender</label>
												<select
													className='form-select'
													onChange={this.onGenderSelect}
													value={this.state.gender}>
													<option value={'Male'}>Male</option>
													<option value='Female'>Female</option>
												</select>
											</div>
											<div className='form-group form-control-lg'>
												<label>Upload Image</label>
												<input
													type='file'
													className='form-control-file'
													id='img'
													onChange={this.onFileChange}></input>
												<img
													src={this.state.image}
													className={imageClass}
													alt='alt'
												/>
											</div>
										</form>
									</div>
									<div className='modal-footer'>
										<button
											type='button'
											className='btn btn-secondary'
											onClick={this.onSave}>
											Save
										</button>
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
		);
	}
}
