import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddAgencyHiveAi } from '../integrations/supabase';
import { toast } from 'sonner';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const addAgencyHiveAi = useAddAgencyHiveAi();

  const onSubmit = async (data) => {
    try {
      await addAgencyHiveAi.mutateAsync(data);
      toast.success('Sign up successful!');
    } catch (error) {
      toast.error('Sign up failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register('first_name', { required: 'First name is required' })}
          placeholder="First Name"
        />
        {errors.first_name && <p className="text-red-500">{errors.first_name.message}</p>}
      </div>
      <div>
        <Input
          {...register('last_name', { required: 'Last name is required' })}
          placeholder="Last Name"
        />
        {errors.last_name && <p className="text-red-500">{errors.last_name.message}</p>}
      </div>
      <div>
        <Input
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Input
          {...register('phone', { 
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid phone number, must be 10 digits"
            }
          })}
          type="tel"
          placeholder="Phone (for verification)"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUpForm;