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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <Input
              {...register('first_name', { required: 'First name is required' })}
              placeholder="First Name"
              className="w-full"
            />
            {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>}
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
              className="w-full"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <Input
              {...register('last_name', { required: 'Last name is required' })}
              placeholder="Last Name"
              className="w-full"
            />
            {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>}
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
              placeholder="Mobile Phone (for verification)"
              className="w-full"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <Button type="submit" className="w-full md:w-auto">Sign Up</Button>
      </div>
    </form>
  );
};

export default SignUpForm;