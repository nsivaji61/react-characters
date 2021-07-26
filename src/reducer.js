export const types = {
	LOAD_CHARACTERS:'LOAD_CHARACTERS',
	ADD_CHARACTER:'ADD_CHARACTER',
	LOAD_CHARACTERS_SUCCESS:'LOAD_CHARACTERS_SUCCESS'
};

const loadCharacters = (payload)=>({
	type:types.LOAD_CHARACTERS,
	payload
});
const loadCharactersSuccess=(payload)=>({
    type: types.LOAD_CHARACTERS_SUCCESS,
    payload
});

const addCharacter=(payload)=>({
    type:types.ADD_CHARACTER,
    payload
})

export const actions = {
	loadCharacters,
    loadCharactersSuccess,
    addCharacter
};
const initialState = {
	characters: {
		loaded: false,
        data :{}
	},
};
const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case types.LOAD_CHARACTERS_SUCCESS:
			return { ...state ,characters:{loaded:true,data:{...action.payload}}};
        case types.ADD_CHARACTER:
            return {...state, 
					characters:{...state.characters,
								data:{...state.characters.data,info:{...state.characters.data.info, count:state.characters.data.info.count+1},
								 results:[{...action.payload},...state.characters.data.results]}}
				}
		default:
			return state;
	}
};

export default reducer;
