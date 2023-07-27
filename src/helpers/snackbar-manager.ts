import { useSnackbar } from 'notistack';

let useSnackbarRef: any;
export const SnackbarUtilitiesConfigutator = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const SnackbarUtilities = {
  toast(message: string, variant: string) {
    useSnackbarRef.enqueueSnackbar(message, { variant });
  },
  success(message: string) {
    this.toast(message, 'success');
  },
  error(message: string) {
    this.toast(message, 'error');
  },
};
