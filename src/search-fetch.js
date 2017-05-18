import axios from 'axios';

const ROOT_URL = `http://www.nxp.com/webapp/search/gsaSearchApi?param=std&num=10`;

export default function gsaSearch(term) {
    const url = `${ROOT_URL}&q=${term}`
    return axios.get(url, {})
        .then(function (response) {
            return response.data
        }
    );
}
