const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'https://dogflix.herokuapp.com'
  : 'https://dogflix.herokuapp.com';

export default {
  URL_BACKEND,
};