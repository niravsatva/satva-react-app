import toast from 'react-hot-toast';
enum ToastType {
  success,
}

export const toastText = (message: string, type: string) => {
  toast['success'](message, {
    style: {
      fontSize: '16px',
    },
  });
};
