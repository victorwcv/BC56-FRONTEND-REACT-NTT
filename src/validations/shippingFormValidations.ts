import { ShippingForm } from "../types/interfaces/shippingForm.interface";

export const validateForm = (formValues: ShippingForm) => {
  const errors: Partial<ShippingForm> = {};

  if (!formValues.firstName.trim()) {
    errors.firstName = "Nombre requerido";
  } else if (!/^[a-zA-Z ]+$/.test(formValues.firstName)) {
    errors.firstName = "Ingresar solo letras";
  }
  if (!formValues.lastName.trim()) {
    errors.lastName = "Apellido requerido";
  } else if (!/^[a-zA-Z ]+$/.test(formValues.lastName)) {
    errors.lastName = "Ingresar solo letras";
  }
  if (!formValues.district) {
    errors.district = "Seleccione un distrito";
  }
  if (!formValues.address.trim()) {
    errors.address = "Dirección requerida";
  }
  if (!formValues.reference.trim()) {
    errors.reference = "Referencia requerida";
  }
  if (!formValues.phoneNumber.trim()) {
    errors.phoneNumber = "Número de celular requerido";
  } else if (!/^\d+$/.test(formValues.phoneNumber)) {
    errors.phoneNumber = "Ingresar solo números";
  } else if (formValues.phoneNumber.length !== 9) {
    errors.phoneNumber = "Ingresar 9 dígitos";
  }

  return errors;
};