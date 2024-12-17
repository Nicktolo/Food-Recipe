import axiosClient from '../axiosClient';

export function searchMeals({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
     .then(({data}) => {
        commit('setSearchMeals', data.meals)
     })
}
export function searchByLetter({commit}, letter){
   axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
       commit('setSearchLetter', data.meals)
    })
}