import { create } from "zustand";

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  phone: number;
  birthday: string;
  gender: string;
  country: string;
  district: string;
  municipality: string;
  city: string;
  ward: string;
  image: string;
}

interface FormState {
  formData: FormData;
  addFormData: (key: keyof FormData, value: string | number) => void;
}

const useFormStore = create<FormState>((set) => ({
  formData: {
    firstName: "",
    middleName: "",
    lastName: "",
    phone: 0,
    birthday: "",
    gender: "",
    country: "",
    district: "",
    municipality: "",
    city: "",
    ward: "",
    image: "",
  },

  addFormData: (key, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [key]: value,
      },
    })),
}));

export default useFormStore;
