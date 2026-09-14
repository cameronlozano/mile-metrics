import toast from 'react-hot-toast';
import cn from './cn';
import { Link } from 'react-router';

const showToast = (promise, mode) => {
  const id = crypto.randomUUID();

  // Stylings
  const divStyling = cn(
    'white flex cursor-pointer flex-col items-start justify-center gap-px rounded-lg border border-slate-300/60 bg-linear-to-b from-transparent via-slate-50 to-slate-100/80 px-4 py-2 shadow-sm shadow-black/10 transition-transform duration-125 hover:-translate-y-1.5',
  );
  const primaryStyling = cn(
    'text-color-header-secondary-muted text-sm font-bold tracking-tight',
  );
  const secondaryStyling = cn(
    'text-color-subtle text-sm font-medium tracking-tighter',
  );

  const toastConfig = {
    form: {
      loading: (
        <div className={divStyling} onClick={() => toast.dismiss(id)}>
          <p className={primaryStyling}>Saving entry</p>
        </div>
      ),
      success: (
        <div className={divStyling} onClick={() => toast.dismiss(id)}>
          <p className={primaryStyling}>Your entry has been saved</p>
          <p className={secondaryStyling}>
            <Link>Click here to view your miles</Link>
          </p>
        </div>
      ),
      error: (
        <div className={divStyling} onClick={() => toast.dismiss(id)}>
          <p className={primaryStyling}>Entry could not be saved</p>
          <p className='text-color-subtle text-sm font-medium tracking-tighter'>
            Try again later
          </p>
        </div>
      ),
    },
  };

  return toast.promise(promise, toastConfig[mode], {
    style: {
      padding: 0,
      background: 'transparent',
      boxShadow: 'none',
    },
    duration: 4000000,
    id,
  });
};

export default showToast;
