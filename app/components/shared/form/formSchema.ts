import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, 'Type in at least 2 characters'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  message: z.string().min(5, 'Message is required'),
});

export type FormSchema = z.infer<typeof formSchema>;

export const formDefaultValues: FormSchema = {
  name: '',
  email: '',
  message: ''
};