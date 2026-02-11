import { RegisterOptions } from "react-hook-form";

export type FieldConfig = {
  name: keyof FormData;
  label: string;
  placeholder: string;
  type?: string;
  validation?: RegisterOptions;
  fullWidth?: boolean;
};

export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  address: string;
};

export const personalFields: FieldConfig[] = [
  {
    name: "fullName",
    label: "Full name",
    placeholder: "Exp. John Carter",
    validation: {
      required: "Full name is required",
      minLength: {
        value: 3,
        message: "Minimum 3 characters",
      },
      pattern: {
        value: /^[A-Za-z\s]+$/, 
        message: "Name should not contain numbers",
      },
    },
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 
        message: "Enter a valid email address",
      },
    },
  },
  {
    name: "phone",
    label: "Phone number",
    placeholder: "Enter 10 digit number",
    validation: {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]{10}$/, 
        message: "Phone number must be exactly 10 digits",
      },
      maxLength: {
        value: 10,
        message: "Phone number cannot exceed 10 digits",
      },
    },
  },
  {
    name: "company",
    label: "Company",
    placeholder: "Exp. Company",
   validation: {
      pattern: {
        value: /^[A-Za-z\s]+$/, 
        message: "Company name should not contain numbers",
      },
    },
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Exp. San Francisco, CA",
    validation: {
      required: "Address is required",
    },
    fullWidth: true,
  },
];