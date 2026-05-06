import * as z from 'zod';

// const nameSchema = z.string().min(2, 'Name should at least have 2 characters').max(12, 'Nmae should not have more than 12 characters')
// const surnameSchema = z.string().min(2).max(12);
// const emailSchema = z.string().email('Invalid email address')

export const personalInfoSchema = z.object({
    name: z.string().trim().min(2, 'Name should at least have 2 charachters'),
    surname: z.string().trim().min(2, 'Surname should be at least 2 characters'),
    email: z.string().trim().email('Please provide valid email'),
    company: z.string().trim().min(2, 'Company is required'),
    address: z.string().trim().min(3, 'Address is required'),
});