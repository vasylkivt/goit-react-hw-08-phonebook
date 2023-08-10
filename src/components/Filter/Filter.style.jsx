import styled from 'styled-components';

import { DebounceInput } from 'react-debounce-input';
import { BsSearch } from 'react-icons/bs';

export const InputWrap = styled.div`
  position: relative;
  margin: 30px 0 20px 0;
  width: 310px;
  border-bottom: 2px solid #fff;
`;

export const InputName = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1em;
  pointer-events: none;
  transition: 0.5s;
`;

export const Input = styled(DebounceInput)`
  width: 100%;
  height: 50px;

  background: transparent;
  border: none;
  outline: none;

  padding: 0 35px 0 5px;
  color: #fff;

  &:focus ~ label,
  &:valid ~ label {
    top: -5px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SearchIcon = styled(BsSearch)`
  fill: ${({ theme }) => theme.colors.accent};
  position: absolute;
  right: 8px;
  top: 20px;
`;
