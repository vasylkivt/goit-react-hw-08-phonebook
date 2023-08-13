import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/selectors';

export const selectFilterValue = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (items, filter) =>
    items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
);

// export const selectVisibleContacts = ({ contacts: { items }, filter }) => {
//   if (!filter) return items;

//   return items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
