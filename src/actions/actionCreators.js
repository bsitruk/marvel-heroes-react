import { getCharacters } from '../Api';

// Pull data from Marvel API

export function fetchHeroesData() {
    return {
        type: 'FETCH_DATA',
        payload: getCharacters()
    }
}