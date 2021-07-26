import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { actions } from './reducer';
import { connect } from 'react-redux';

import Character from './Character';
import AddCharacterModal from './AddCharacterModal';
import Header from './Header';

import selectors from './selector';

export class CharactersContainer extends PureComponent {
	static propTypes = {
		actions: PropTypes.object.isRequired,
		loaded: PropTypes.bool,
		data: PropTypes.array,
	};
	constructor(props) {
		super(props);
		this.actions = this.props.actions;
		this.state = { displayModal: false, pageIndex: 1 };
	}

	componentDidMount() {
		const { loaded } = this.props;
		const { pageIndex } = this.state;
		if (!loaded) {
			this.actions.loadCharacters({ index: pageIndex });
		}
	}
	onNext = () => {
		const { pageIndex } = this.state;

		this.actions.loadCharacters({ index: pageIndex + 1 });
		this.setState({ pageIndex: pageIndex + 1 });
	};
	onPrevious = () => {
		const { pageIndex } = this.state;
		this.actions.loadCharacters({ index: pageIndex - 1 });
		this.setState({ pageIndex: pageIndex - 1 });
	};

	onModalClose = () => {
		this.setState({ displayModal: false });
	};
	onAddCharacter = (data) => {
		this.actions.addCharacter({ id: Math.random(), ...data });
		this.onModalClose();
	};

	addNewCharacter = () => {
		this.setState({ displayModal: true });
	};
	renderCharacter(data) {
		return (
			<React.Fragment>
				<div className='col-sm-3 card-bottom'>
					<Character Key={data.id} data={data} />
				</div>
			</React.Fragment>
		);
	}
	renderHeader = () => {
		const { info } = this.props;
		return (
			<Header
				next={info.next}
				previous={info.prev}
				total={info.count}
				onAdd={this.addNewCharacter}
				onNext={this.onNext}
				onPrevious={this.onPrevious}
			/>
		);
	};
	renderCharactersContainer() {
		const { data } = this.props;
		if (data) {
			return (
				<React.Fragment>
					<div className='container'>
						<div className='row card-bottom '>{this.renderHeader()}</div>
						<div className='row'>
							{data.map((result) => {
								return this.renderCharacter(result);
							})}
						</div>
					</div>
				</React.Fragment>
			);
		}
	}
	renderModal() {
		const { displayModal } = this.state;
		return (
			<AddCharacterModal
				show={displayModal}
				onClose={this.onModalClose}
				onAddCharacter={this.onAddCharacter}
			/>
		);
	}
	render() {
		const { loaded } = this.props;

		return loaded === true ? (
			<React.Fragment>
				{this.renderCharactersContainer()}
				{this.renderModal()}
			</React.Fragment>
		) : null;
	}
}

const mapStateToProps = (state) => ({
	loaded: selectors.getLoaded(state),
	data: selectors.getResults(state),
	info: selectors.getInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ ...actions }, dispatch),
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CharactersContainer);
