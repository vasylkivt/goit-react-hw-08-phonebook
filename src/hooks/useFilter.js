import { useSelector } from 'react-redux';
import { selectFilterValue, selectVisibleContacts } from 'redux/filter/selectors';


export const useFilter = () => {
const filterValue = useSelector(selectFilterValue);
const visibleContacts = useSelector(selectVisibleContacts);

  return {
   filterValue,
visibleContacts
  };
};
