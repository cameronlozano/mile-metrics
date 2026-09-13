import { useEffect } from 'react';
import toast, { useToasterStore } from 'react-hot-toast';

const useToasterLimit = () => {
  const { toasts } = useToasterStore();
  console.log({ toasts });

  useEffect(() => {
    const visibleToast = toasts.filter((toast) => toast.visible === true);
    console.log({ visibleToast });

    if (visibleToast.length > 1)
      visibleToast.forEach((visibleToast, index) => {
        if (index != 0) toast.dismiss(visibleToast.ids);
      });
  }, [toasts]);
};

export default useToasterLimit;
