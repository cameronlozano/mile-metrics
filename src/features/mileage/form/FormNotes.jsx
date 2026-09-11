import FieldLabel from '../../../ui/FieldLabel';
import { useFormContext } from './FormContext';

const FormNotes = () => {
  const { register } = useFormContext();
  return (
    <>
      <FieldLabel className='text-center' htmlFor='notes'>
        Notes
      </FieldLabel>

      <textarea
        {...register('notes')}
        id='notes'
        placeholder='Notes...'
        className='h-full w-15/16 resize-none self-center rounded-xl border border-gray-300 bg-white p-3 text-gray-500 transition-all duration-100 outline-none placeholder:text-gray-300 focus:ring-4 focus:ring-emerald-500 focus-visible:ring-offset-2'
      ></textarea>
    </>
  );
};

export default FormNotes;
