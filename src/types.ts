/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  iconName: string; // Used to pick correct Lucide icon
  duration: string;
  priceEstimate: string;
}

export interface PortfolioItem {
  id: string;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  likes: number;
}

export interface Review {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  image?: string;
  role?: string;
  company?: string;
}

export interface NailDesignOption {
  id: string;
  name: string;
  value: string;
  hex?: string; // Optional color hex code
}

export interface Appointment {
  id: string;
  clientName: string;
  clientPhone: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed';
}
