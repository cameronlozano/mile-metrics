import { useEffect } from 'react';
import toast, { useToasterStore } from 'react-hot-toast';

const useToasterLimit = () => {
  const { toasts } = useToasterStore();
  console.log({ toasts });

  useEffect(() => {
    const visibleToast = toasts.filter((toast) => toast.visible);

    // Only allow one visible toast at a time
    if (visibleToast.length > 1) {
      visibleToast.forEach((visibleToast, index) => {
        if (index != 0) toast.dismiss(visibleToast.id);
      });
    }
  }, [toasts]);
};

export default useToasterLimit;
