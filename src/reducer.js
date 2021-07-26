export const types = {
	LOAD_CHARACTERS: 'LOAD_CHARACTERS',
	ADD_CHARACTER: 'ADD_CHARACTER',
	LOAD_CHARACTERS_SUCCESS: 'LOAD_CHARACTERS_SUCCESS',
	FIND_SELECTED_CHARACTER: 'FIND_SELECTED_CHARACTER',
};

const loadCharacters = (payload) => ({
	type: types.LOAD_CHARACTERS,
	payload,
});
const loadCharactersSuccess = (payload) => ({
	type: types.LOAD_CHARACTERS_SUCCESS,
	payload,
});

const addCharacter = (payload) => ({
	type: types.ADD_CHARACTER,
	payload,
});

const findCharacter = (payload) => ({
	type: types.FIND_SELECTED_CHARACTER,
	payload,
});
export const actions = {
	loadCharacters,
	loadCharactersSuccess,
	addCharacter,
	findCharacter,
};
const initialState = {
	characters: {
		loaded: false,
		data: { selectedCharacter: {} },
	},
};
const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case types.LOAD_CHARACTERS_SUCCESS:
			return {
				...state,
				characters: { loaded: true, data: { ...action.payload } },
			};
		case types.ADD_CHARACTER:
			return {
				...state,
				characters: {
					...state.characters,
					data: {
						...state.characters.data,
						info: {
							...state.characters.data.info,
							count: state.characters.data.info.count + 1,
						},
						results: [{ ...action.payload }, ...state.characters.data.results],
					},
				},
			};
		case types.FIND_SELECTED_CHARACTER:
			return {
				...state,
				characters: {
					...state.characters,
					data: {
						...state.characters.data,
						selectedCharacter: {
							...state.characters.data.results.find(
								(e) => e.id === action.payload
							),
						},
					},
				},
			};
		default:
			return state;
	}
};

export default reducer;
