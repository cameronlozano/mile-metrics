import { useForm } from 'react-hook-form';
import Link from '../ui/Link';

import { LoginContext } from '../features/mileage/login/LoginContext';
import Header from '../features/mileage/login/Header';
import ControlledLoginInput from '../features/mileage/login/ControlledLoginInput';
import Button from '../ui/Button';
import Footer from '../features/mileage/login/Footer';

const LoginPage = () => {
  // Form instance
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    getValues,
    control,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onTouched',
    delayError: 1000,
    defaultValues: {
      username: null,
      password: null,
    },
  });

  return (
    <LoginContext.Provider value={{ control }}>
      <div className='relative flex w-full flex-col items-center justify-center overflow-hidden pt-12'>
        {/* ABSTRACT BACKGROUND DESIGN */}
        <div
          aria-hidden='true'
          className='absolute -top-15 left-95 h-160 w-50 rotate-25 rounded-full bg-linear-to-br from-slate-200/50 via-slate-100/10 to-transparent'
        ></div>
        {/* <div
          aria-hidden='true'
          className='absolute -top-15 right-95 h-160 w-40 -rotate-25 rounded-full bg-linear-to-bl from-slate-200/20 via-slate-100/10 to-transparent'
        ></div> */}

        {/* HEADER */}
        <div className='pb-9'>
          <Header />
        </div>
        {/* EMAIL & PASSWORD INPUTS */}
        <div className='relative flex flex-col gap-5 pb-7'>
          {/* USERNAME */}
          <ControlledLoginInput mode={'username'} />

          {/* PASSWORD & FORGOT PASSWORD */}
          <div className='relative flex flex-col'>
            <ControlledLoginInput mode={'password'} />

            {/* FORGOT PASSWORD */}
            <Link className='ml-auto' to={'/forgot-password'}>
              Forgot Password?
            </Link>
          </div>

          <div
            aria-hidden='true'
            className='text-color-subtle absolute -right-75 flex h-30 gap-3 tracking-widest uppercase'
          >
            <div
              aria-hidden='true'
              className='flex w-px flex-1 -translate-y-3 bg-linear-to-t from-transparent via-slate-300 to-slate-300'
            />

            <div className='text-xs font-extralight'>
              <p>Better</p>
              <p>Days</p>
              <p>Are</p>
              <p>Coming</p>
            </div>
          </div>

          {/* SUBMIT */}
          <Button className='w-full' variant='submit'>
            Submit
          </Button>
        </div>

        {/* OR */}
        <div className='flex w-[50%] items-center gap-4 pb-5'>
          <div
            aria-hidden='true'
            className='h-px flex-1 bg-linear-to-r from-transparent via-slate-500/20 to-slate-400/30'
          />

          <span className='text-xs text-slate-500'>OR</span>

          <div
            aria-hidden='true'
            className='h-px flex-1 bg-linear-to-l from-transparent via-slate-500/20 to-slate-400/30'
          />
        </div>

        {/* CREATE AN ACCOUNT */}
        <Link to='/signup'>Create an account</Link>

        <Footer />
      </div>
    </LoginContext.Provider>
  );
};

export default LoginPage;
