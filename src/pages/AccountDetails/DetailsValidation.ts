import * as z from 'zod';
import { da } from 'zod/v4/locales';

export const AccountDetailsSchema = (step1Email:string)=>z.object({
    username: z.string().min(3, 'Name should include at least 3 characters')
        .max(20, 'Name should not be longer than 20 characters')
        .regex(/^[A-Za-z0-9_]+$/, 'Only letters, numbers, and underscores are allowed'),
    email: z.string().email(),
    password: z.string()
        .min(8, 'Password must contain at least 8 characters')
        .regex(
            /^(?=.*[A-Z])(?=.*\d).+$/,
            'Password must contain at least one uppercase letter and one number'
        ),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not much',
    path:['confirmPassword']
}).refine(data => data.email === step1Email, {
    message: 'Emails do not match',
    path: ['email']
})