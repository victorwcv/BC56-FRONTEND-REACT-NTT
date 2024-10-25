export const firstNameValidation = (firstName: string): string | undefined => {
  if (!firstName.trim()) {
    return "Nombre requerido.";
  } else if (!/^[a-zA-Z ]+$/.test(firstName)) {
    return "Ingresar solo letras.";
  } else {
    return undefined;
  }
};

export const lastNameValidation = (lastName: string): string | undefined => {
  if (!lastName.trim()) {
    return "Apellido requerido.";
  } else if (!/^[a-zA-Z ]+$/.test(lastName)) {
    return "Ingresar solo letras.";
  } else {
    return undefined;
  }
};

export const districtValidation = (district: string): string | undefined => {
  if (!district) {
    return "Seleccione un distrito.";
  } else {
    return undefined;
  }
};

export const addressValidation = (address: string): string | undefined => {
  if (!address.trim()) {
    return "Dirección requerida.";
  } else {
    return undefined;
  }
};

export const referenceValidation = (reference: string): string | undefined => {
  if (!reference.trim()) {
    return "Referencia requerida.";
  } else {
    return undefined;
  }
};

export const phoneNumberValidation = (phoneNumber: string): string | undefined => {
  if (!phoneNumber.trim()) {
    return "Celular requerido.";
  } else if (!/^\d+$/.test(phoneNumber)) {
    return "Ingresar solo números.";
  } else if (phoneNumber.length !== 9) {
    return "Ingresar 9 dígitos.";
  } else {
    return undefined;
  }
};