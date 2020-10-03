import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFact } from '../../redux/facts/factsSelectors';
import { fetchFact } from '../../redux/facts/factsOperations';

const useGetFact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFact());
  }, [dispatch]);

  const fact = useSelector(getFact);

  return {
    fact,
  };
};

export default useGetFact;
