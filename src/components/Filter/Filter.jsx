

import { useDispatch, useSelector } from 'react-redux';


import { Input, InputName, InputWrap, SearchIcon } from './Filter.style';
import { selectFilterValue } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
  const value = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => dispatch(setFilter(value));

  return (
    <InputWrap>
      <SearchIcon />
      <Input
      debounceTimeout={300}
      value={value}
      onChange={onChange}
      type="text"
      required
      />
      <InputName>Find contacts</InputName>
    </InputWrap>
  );
};
