// https://www.youtube.com/watch?v=MjavMX8fUAE&t=348s

const baseUrl = '';


export const loadData = () => {
    return fetch(baseUrl, {
        mode: 'cors',
        headers: new Headers({
            'Access-Control-Allow-Origin': '*'
        })
    }).then(res => res.json());
}
