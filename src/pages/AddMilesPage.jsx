import { useFieldArray, useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'react-router';
import { useRef } from 'react';

import { insertMileageEntry } from '../features/mileage/mileageApi';
import { FormContext } from '../features/mileage/form/FormContext';

import FormHeader from '../features/mileage/form/FormHeader';
import FormDatePicker from '../features/mileage/form/FormDatePicker';
import FormMilesInput from '../features/mileage/form/FormMilesInput';
import FormLocationEntry from '../features/mileage/form/FormLocationEntry';
import AddLocationButton from '../features/mileage/form/AddLocationButton';
import FormNotes from '../features/mileage/form/FormNotes';
import FormSubmitButton from '../features/mileage/form/FormSubmitButton';
import showToast from '../utils/showToast';
import cn from '../utils/cn';

export default function AddMilesPage() {
  const queryClient = useQueryClient();

  // Refs
  const radioGroupRef = useRef(null);
  const addLocationRef = useRef(null);

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
      date: null,
      initialMiles: null,
      endingMiles: null,
      notes: '',
      locations: [
        {
          country: null,
          region: null,
          locality: null,
          category: null,
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'locations',
  });

  // Handlers
  const onSubmit = async (data) => {
    try {
      const { year, month, day } = data.date;

      const payload = {
        date: new Date(year, month - 1, day),
        initialMiles: Number(data.initialMiles),
        endingMiles: Number(data.endingMiles),
        locations: [...data.locations].flat(),
        notes: data.notes,
      };

      console.log({ data, payload });

      await showToast(insertMileageEntry(payload), 'form');

      // Clear cache
      queryClient.invalidateQueries({ queryKey: ['miles'] });

      // Reset form
      // reset();
    } catch (err) {
      console.log(err);
    }
  };

  const onError = (errors) => {
    console.log({ errors });
  };

  const handleKeyDownCapture = (e) => {
    if (radioGroupRef.current.contains(e.target))
      if (e.key === 'Enter') {
        e.preventDefault();
        addLocationRef.current?.focus();
      }
  };

  // #region Styles
  const containerStyles = cn(
    'pt-page-offset-top-sm px-page-offset-sides-sm w-full',
  );
  // #endregion Styles

  return (
    <FormContext.Provider
      value={{
        control,
        fields,
        isSubmitting,
        register,
        getValues,
        resetField,
        append,
        radioGroupRef,
        addLocationRef,
      }}
    >
      <Form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={containerStyles}
      >
        {/* Header */}
        <div className='pb-space-sm flex items-center justify-center'>
          <FormHeader />
        </div>

        <div className='gap-space-lg flex grow basis-0 justify-between'>
          <FormDatePicker />

          <div className='gap-space-xs flex w-full flex-col'>
            <FormMilesInput mode='initial' />
            <FormMilesInput mode='ending' />
          </div>
        </div>

        {/* Content container temporarily disabled
            <div
              onKeyDownCapture={handleKeyDownCapture}
              className='mb-5 flex flex-col pb-4.5'
            >
              <FormLocationEntry />

              <AddLocationButton />
            </div>

            <div className='mb-5 flex flex-col gap-1.5 pb-10'>
              <FormNotes />
            </div>

            <div className='flex w-full justify-center'>
              <FormSubmitButton />
            </div>
            */}
      </Form>
    </FormContext.Provider>
  );
}
