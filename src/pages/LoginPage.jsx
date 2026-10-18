import { useForm } from 'react-hook-form';
import Link from '../ui/Link';

import { LoginContext } from '../features/mileage/login/LoginContext';
import Header from '../features/mileage/login/Header';
import ControlledLoginInput from '../features/mileage/login/ControlledLoginInput';
import Button from '../ui/Button';
import cn from '../utils/cn';
import { CircleX, Lock, Mail } from 'lucide-react';

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

  // #region Container styles
  const containerStyles = cn(
    'pt-page-offset-top-sm px-page-offset-sides-md w-full',
  );
  // #endregion Container styles

  // #region Form styles
  const inputConfig = {
    icons: {
      email: {
        inputSvg: (invalid) => (
          <Mail
            aria-hidden='true'
            size={10}
            className={cn('text-svg-default', invalid && 'text-svg-error')}
          />
        ),
        fieldErrorSvg: (
          <CircleX aria-hidden='true' size={10} className={'text-svg-error'} />
        ),
      },
      password: {
        inputSvg: (invalid) => (
          <Lock
            aria-hidden='true'
            size={10}
            className={cn('text-svg-default', invalid && 'text-svg-error')}
          />
        ),
        fieldErrorSvg: (
          <CircleX aria-hidden='true' size={10} className={'text-svg-error'} />
        ),
      },
    },

    classNames: {
      textField: cn(''),

      label: cn('text-text-subtitle text-[10px]'),

      inputGroup: (invalid) =>
        cn(
          'border-border-muted px-space-xs gap-space-xs py-space-2xs mb-space-xs flex max-w-100 min-w-50 items-center rounded-sm border leading-none',
          invalid && 'border-text-error bg-bg-error border-2',
        ),

      input: cn('text-text-heading w-full text-[9px] outline-none'),

      svg: cn('text-svg-default size-2.5'),

      description: cn(''),

      fieldErrorGroup: cn('gap-space-2xs flex items-center leading-none'),

      fieldError: cn(
        'text-text-heading block text-[8px] text-pretty text-red-700',
      ),
    },
  };
  // #endregion Form styles

  return (
    <div className={containerStyles}>
      <LoginContext.Provider value={{ control }}>
        {/* Decorative diagonal gradient shape */}
        {/* <div
            aria-hidden='true'
            className='absolute -top-15 left-95 h-160 w-50 rotate-25 rounded-full bg-linear-to-br from-slate-200/50 via-slate-100/10 to-transparent'
          />
          <div
            aria-hidden='true'
            className='absolute -top-15 right-95 h-160 w-40 rotate-25 rounded-full bg-linear-to-bl from-slate-800/30 via-slate-100/10 to-transparent'
          /> */}

        {/* Header */}
        <div className='pb-space-sm'>
          <Header />
        </div>

        {/* Form inputs & forgot password link */}
        <form className='pb-space-sm mx-auto flex w-fit flex-col'>
          <ControlledLoginInput mode={'email'} inputConfig={inputConfig} />

          {/* Password input */}
          <ControlledLoginInput mode={'password'} inputConfig={inputConfig} />

          {/* Forgot password link */}
          <Link
            className={cn('pt-space-2xs ml-auto text-[8px]')}
            to={'/forgot-password'}
          >
            Forgot Password?
          </Link>
        </form>

        {/* Submit */}
        <Button className='w-full' variant='submit'>
          Submit
        </Button>

        {/*
          <p>Better</p>
          <p>Days</p>
          <p>Are</p>
          <p>Coming</p>

          <div
            aria-hidden='true'
            className='h-px flex-1 bg-linear-to-r from-transparent via-slate-500/20 to-slate-400/30'
          />

          <span className='text-xs text-slate-500'>OR</span>

          <div
            aria-hidden='true'
            className='h-px flex-1 bg-linear-to-l from-transparent via-slate-500/20 to-slate-400/30'
          />
          */}
        {/*
        Create an account link
        <Link to='/signup'>Create an account</Link>
        <Footer />
        */}
      </LoginContext.Provider>
    </div>
  );
};

export default LoginPage;
