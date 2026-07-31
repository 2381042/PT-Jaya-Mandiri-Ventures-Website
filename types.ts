/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export type BrandId = 'jmv' | 'agioo' | 'mizux' | 'bioluminex';

export interface Product {
  id: string;
  brand: BrandId;
  brandName: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  volume?: string;
  category: 'Coolant & Radiator' | 'Car Detailing' | 'Air Freshener' | 'Wiper & Wash' | 'Biotech & Luminescence';
  imageUrl: string;
  gallery?: string[];
  features: string[];
  specs?: { label: string; value: string }[];
  astmCertified?: boolean;
  fastMoving?: boolean;
}

export interface DistributorFormInput {
  companyName: string;
  entityType: 'PT' | 'CV';
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  notes?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'product'; product: Product }
  | { type: 'distributor' };
