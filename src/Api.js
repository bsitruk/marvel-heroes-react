import Config from './Config';
import crypto from 'crypto';
import axios from 'axios';

const CHARACTERS_URI = '/v1/public/characters';

const generateHash = (ts) => {
    const concatenatedString = [ts, Config.API_PRIVATE, Config.API_PUBLIC].join("");
    return crypto.createHash('md5').update(concatenatedString).digest('hex');
};

export const getCharacters = () => {
    const url = `${Config.BASE_URL}${CHARACTERS_URI}`;
    const ts = Date.now();
    const params = {
        ts,
        apikey: Config.API_PUBLIC,
        hash: generateHash(ts)
    };

    return axios.get(url, {
        params
    }).catch((err) => {
        console.log(err);
    });
};
