import { ShippingForm } from "../types/interfaces/shippingForm.interface";
import { firstNameValidation, lastNameValidation, districtValidation, addressValidation, referenceValidation, phoneNumberValidation } from "./fieldsValidation";

export const validateForm = (formValues: ShippingForm) => {
  const errors: Partial<ShippingForm> = {};

  const firstNameError = firstNameValidation(formValues.firstName);
  if (firstNameError) errors.firstName = firstNameError;

  const lastNameError = lastNameValidation(formValues.lastName);
  if (lastNameError) errors.lastName = lastNameError;

  const districtError = districtValidation(formValues.district);
  if (districtError) errors.district = districtError;

  const addressError = addressValidation(formValues.address);
  if (addressError) errors.address = addressError;

  const referenceError = referenceValidation(formValues.reference);
  if (referenceError) errors.reference = referenceError;

  const phoneNumberError = phoneNumberValidation(formValues.phoneNumber);
  if (phoneNumberError) errors.phoneNumber = phoneNumberError;

  return errors;
};


