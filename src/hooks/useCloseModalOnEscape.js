import { useEffect } from 'react';

import { contactsSlice } from 'redux/contacts';

export const useCloseModalOnEscape = dispatch => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') dispatch(contactsSlice.closeModal());
    };

    window.addEventListener('keydown', handleKeyDown);
    

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      
    };
  }, [dispatch]);
};
