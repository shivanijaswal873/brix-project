import { RegisterOptions } from "react-hook-form";

export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  address: string;
};

export type FieldConfig = {
  name: keyof FormData;
  label: string;
  placeholder: string;
  type?: string;
  validation?: RegisterOptions<FormData>;
  fullWidth?: boolean;
};


const namePattern = {
  value: /^[A-Za-z\s]+$/,
  message: "Only letters allowed",
};

const emailPattern = {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  message: "Enter a valid email address",
};

const phonePattern = {
  value: /^[0-9]{10}$/,
  message: "Phone number must be exactly 10 digits",
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
      pattern: namePattern,
    },
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    validation: {
      required: "Email is required",
      pattern: emailPattern,
    },
  },
  {
    name: "phone",
    label: "Phone number",
    placeholder: "Enter 10 digit number",
    type: "tel",
    validation: {
      required: "Phone number is required",
      pattern: phonePattern,
    },
  },
  {
    name: "company",
    label: "Company",
    placeholder: "Exp. Company",
    validation: {
      pattern: namePattern,
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