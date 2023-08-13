import { useDispatch } from 'react-redux';
import { Input, InputName, InputWrap, SearchIcon } from './Filter.style';
import { setFilter } from 'redux/filter/slice';
import { useFilter } from 'hooks';

export const Filter = () => {
  const { filterValue } = useFilter();

  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => dispatch(setFilter(value));

  return (
    <InputWrap>
      <SearchIcon />
      <Input
        debounceTimeout={300}
        value={filterValue}
        onChange={onChange}
        type="text"
        required
      />
      <InputName>Find contacts</InputName>
    </InputWrap>
  );
};
