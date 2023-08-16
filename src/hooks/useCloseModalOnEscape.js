import { useEffect } from 'react';

import { contactsActions } from 'redux/contacts';

export const useCloseModalOnEscape = dispatch => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') dispatch(contactsActions.closeModal());
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);
};
