import Button from '../../../ui/Button';
import { useFormContext } from './FormContext';

const FormSubmitButton = () => {
  const { isSubmitting } = useFormContext();

  return (
    <Button
      type='submit'
      className='w-[50%]'
      disabled={isSubmitting}
      variant='submit'
    >
      {isSubmitting ? <span>...saving record</span> : 'Save entry'}
    </Button>
  );
};

export default FormSubmitButton;
