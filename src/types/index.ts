export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'patient' | 'doctor' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Patient {
  id: number;
  userId: number;
  dateOfBirth?: Date;
  gender?: string;
  address?: string;
  medicalHistory?: string;
  allergies?: string;
  medications?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
}

export interface Doctor {
  id: number;
  userId: number;
  specialization?: string;
  licenseNumber?: string;
  bio?: string;
  consultationFee?: number;
  availableHours?: Record<string, string[]>;
}

export interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  appointmentDate: Date;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  reason?: string;
  notes?: string;
  createdAt: Date;
}

export interface MedicalRecord {
  id: number;
  patientId: number;
  doctorId?: number;
  appointmentId?: number;
  diagnosis?: string;
  treatment?: string;
  prescription?: string;
  notes?: string;
  createdAt: Date;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  authorId: number;
  featuredImage?: string;
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface News {
  id: number;
  title: string;
  content: string;
  excerpt?: string;
  authorId: number;
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: Date;
}

export interface AppointmentFormData {
  patientId: number;
  doctorId: number;
  appointmentDate: string;
  startTime: string;
  endTime: string;
  reason?: string;
  notes?: string;
}

export interface ArticleFormData {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  authorId: number;
  featuredImage?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface AuthFormData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  action: 'login' | 'register';
}