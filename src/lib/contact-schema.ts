import { z } from 'astro/zod';

/** Typed representation of a validated, normalised Netlify form submission. */
export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(160),
  organization: z.string().trim().max(160).optional(),
  inquiryType: z.enum(['Role', 'Project', 'Partnership', 'Other']),
  message: z.string().trim().min(20).max(4000),
  consent: z.literal(true),
  'bot-field': z.string().max(0).optional()
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
