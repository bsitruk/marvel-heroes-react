const initialState = [];

// Transform heroes into a map (comicId -> heroes)
// Then turn the values into an array
const fromHeroesToComics = (heroes) => {
    const comicsMap = heroes.reduce((comicsMap, hero, index) => {
        hero.comics.items.forEach((comic) => {
            const comicId = comic.resourceURI.split('/').pop();

            if(!comicsMap.has(comicId)) {
                comicsMap.set(comicId, {
                    ...comic,
                    id: comicId,
                    heroes: []
                })
            }

            comicsMap.get(comicId).heroes.push(index);
        });
        return comicsMap;
    }, new Map());

    return Array.from(comicsMap.values());
}

const comics = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_FULFILLED':
            const heroes = action.payload.data.data.results;
            state = fromHeroesToComics(heroes);
            break;
        default:
            break;
    }
    return state;
};

export default comics;