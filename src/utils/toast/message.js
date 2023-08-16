import { toast } from 'react-hot-toast';

export const add = contact => {
  toast.success(`${toCapitalize(contact.name)} added to your contact list.`);
};

export const remove = name => {
  toast.success(`${toCapitalize(name)} deleted from your contacts list.`);
};
export const update = (prevData, nextData) => {
  let message = '';
  if (nextData.name) {
    message += `✍️ '${toCapitalize(prevData.name)}' changed to '${toCapitalize(
      nextData.name
    )}' \n`;
  }
  if (nextData.number) {
    message += `✍️ '${prevData.number}' changed to '${nextData.number}' \n`;
  }

  toast.success(message);
};

export const registerSuccess = data => {
  toast.success(
    `${toCapitalize(data.user.name)}, you have successfully registered.`
  );
};

export const registerError = error => {
  if (error.response.status === 400) {
    toast.error(
      `This email already exists 😢,\n enter another email... \n ❓${error.message}`
    );
    return;
  }
  if (error.response.status === 500) {
    toast.error(
      `It seems that the server is overloaded, please try again later... \n ❓${error.message}`
    );
    return;
  }
  toast.error(`Unknown error... \n ${error.message}`);
};

export const loginSuccess = () => {};
export const loginError = () => {};
export const logoutSuccess = () => {};
export const logoutError = () => {};
export const refreshSuccess = () => {};
export const refreshError = () => {};

function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
