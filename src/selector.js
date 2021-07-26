import { createSelector } from 'reselect';

const getCharacters= state => state.characters;

const getLoaded=createSelector([getCharacters],(c)=>{
    return c.loaded;
});
const getData=createSelector([getCharacters],(c)=>{
    return c.data;
});

export const getResults= createSelector([getData],(data)=>{
    return data.results;
}) 

export const getInfo=createSelector([getData],(data)=>{
    return data.info;
}) 
const selectors ={
getLoaded,
getResults,
getInfo
}
export default selectors;