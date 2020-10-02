import * as meowfactsAPI from '../../api/meowfactsAPI';
import * as factsActions from './factsActions';

export const fetchFact = () => dispatch => {
  dispatch(factsActions.fetchFactRequest());

  return meowfactsAPI
    .fetchFact()
    .then(res => {
      dispatch(factsActions.fetchFactSuccess(res.data.data[0]));
    })
    .catch(e => {
      dispatch(factsActions.fetchFactError(e));
    });
};
