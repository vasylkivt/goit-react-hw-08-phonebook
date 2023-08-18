import styled from 'styled-components';

import { DebounceInput } from 'react-debounce-input';
import { BsSearch } from 'react-icons/bs';

export const InputWrap = styled.label`
  position: relative;

  width: 100%;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

export const InputName = styled.span`
  position: absolute;
  top: 20px;
  left: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
`;
export const BgFocus = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
`;

export const Input = styled(DebounceInput)`
  appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 16px 12px 0 12px;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  }

  &:not(:placeholder-shown) + ${InputName} {
    color: rgba(255, 255, 255, 0.5);
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  &:focus {
    background: rgba(0, 0, 0, 0.3);
    outline: none;
    box-shadow: inset 0 -2px 0 ${({ theme }) => theme.colors.accent};
  }

  &:focus + ${InputName} {
    color: ${({ theme }) => theme.colors.accent};
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  &:focus + ${InputName} + ${BgFocus} {
    transform: scaleX(1);
    transition: all 0.1s ease;
  }
`;

export const SearchIcon = styled(BsSearch)`
  fill: ${({ theme }) => theme.colors.accent};
  position: absolute;
  right: 5px;
  top: 20px;
  width: 25px;
  height: 25px;
`;
