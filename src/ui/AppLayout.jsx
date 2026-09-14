import { Outlet, useLocation } from 'react-router';

import Navbar from '../features/mileage/MileageNavbar';
import useToasterLimit from '../hooks/useToasterLimit';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const ToasterLimit = () => {
  useToasterLimit();

  return null;
};

export default function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    toast.dismiss();
  }, [pathname]);

  return (
    <div className='flex min-h-0 flex-col'>
      <Toaster
        position='top-left'
        containerStyle={{
          top: 50,
        }}
      />
      <ToasterLimit />
      <Navbar />

      <main className='flex min-h-0 w-full flex-1'>
        <Outlet />
      </main>
    </div>
  );
}
