import { setFilter } from 'redux/filterSlice';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';

import { Input, InputName, InputWrap, SearchIcon } from './Filter.style';

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
