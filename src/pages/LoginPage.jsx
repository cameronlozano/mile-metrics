import { useForm } from 'react-hook-form';
import { LoginContext } from '../features/mileage/login/LoginContext';

import Link from '../ui/Link';
import cn from '../utils/cn';

import Header from '../features/mileage/login/Header';
import ControlledLoginInput from '../features/mileage/login/ControlledLoginInput';
import Button from '../ui/Button';
import Footer from '../features/mileage/login/Footer';

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
            dc
          >
            Forgot Password?
          </Link>
        </form>

        {/* Submit */}
        <Button className='mb-space-sm w-full' variant='submit'>
          Submit
        </Button>

        {/* Create an account link */}
        <Link
          className='mb-space-lg p-space-2xs mx-auto flex w-fit'
          to='/signup'
        >
          Create an account
        </Link>

        {/* <p className='text-text-faint flex flex-col justify-evenly text-[8px] font-extralight'>
            {'Better Days Are Coming'.split(' ').map((word) => (
              <span key={word}>{word}</span>
            ))}
          </p> */}

        <div className='-mx-page-offset-sides-md'>
          <Footer />
        </div>

        {/* Footer divider */}
        <div
          aria-hidden='true'
          className='h-px flex-1 bg-linear-to-r from-transparent via-slate-500/20 to-transparent'
        />
      </LoginContext.Provider>
    </div>
  );
};

export default LoginPage;
