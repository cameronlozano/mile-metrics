import { useFieldArray, useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'react-router';
import { useRef } from 'react';
import toast from 'react-hot-toast';

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
        className='flex w-full justify-center'
      >
        <div>
          {/* Header */}
          <div className='flex items-center justify-center pb-5'>
            <FormHeader />
          </div>

          {/* content container */}
          <div className='flex w-6xl flex-col justify-center divide-y-2 divide-gray-200'>
            {/* Datepicker & mileage inputs */}
            <div className='mb-4 flex justify-evenly pb-5.5'>
              {/* Date input */}
              <FormDatePicker />

              {/* Initial Miles input */}
              <FormMilesInput mode='initial' />

              {/* Ending Miles input */}
              <FormMilesInput mode='ending' />
            </div>

            {/* Location Selection & tags */}
            <div
              onKeyDownCapture={handleKeyDownCapture}
              className='mb-5 flex flex-col pb-4.5'
            >
              <FormLocationEntry />

              <AddLocationButton />
            </div>

            {/* Notes */}
            <div className='mb-5 flex flex-col gap-1.5 pb-10'>
              <FormNotes />
            </div>

            {/* Submit */}
            <div className='flex w-full justify-center'>
              <FormSubmitButton />
            </div>
          </div>
        </div>
      </Form>
    </FormContext.Provider>
  );
}
