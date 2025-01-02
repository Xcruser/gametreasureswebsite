import { z } from 'zod';
import { Category } from '@prisma/client';

// Basis Item Schema
const itemCore = {
  title: z.string().min(1).max(255),
  description: z.string(),
  price: z.number().positive(),
  imageUrl: z.string().url(),
  category: z.nativeEnum(Category),
  inStock: z.boolean().default(true),
};

export const itemSchema = z.object({
  id: z.string().uuid(),
  ...itemCore,
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Schema für das Erstellen eines Items (ohne ID und Timestamps)
export const createItemSchema = z.object({
  ...itemCore,
});

// Schema für das Aktualisieren eines Items (alle Felder optional)
export const updateItemSchema = z.object({
  ...itemCore,
}).partial();

// Schema für die Suchanfrage
export const searchItemsSchema = z.object({
  query: z.string().optional(),
  category: z.nativeEnum(Category).optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  inStock: z.boolean().optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().default(20),
});

// Typen für TypeScript
export type Item = z.infer<typeof itemSchema>;
export type CreateItem = z.infer<typeof createItemSchema>;
export type UpdateItem = z.infer<typeof updateItemSchema>;
export type SearchItemsParams = z.infer<typeof searchItemsSchema>;
