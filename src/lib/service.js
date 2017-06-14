// https://www.youtube.com/watch?v=MjavMX8fUAE&t=348s

const baseUrl = 'https://api.github.com/users/chris-pearce';


export const loadData = () => {
    return fetch(baseUrl)
        .then(res => {
            if (!res.ok) {
                throw Error('Network request failed');
            }
        })
        .then(res => res.json());
};
