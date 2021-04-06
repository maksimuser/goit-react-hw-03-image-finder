import axios from 'axios';

const API_KEY = '21016038-c4a85434ef4684dfcad661ac9';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data.hits);
};

const fetch = { fetchHits };
export default fetch;
