import { validateForm } from "./shippingFormValidations";
import { ShippingForm } from "../types/interfaces/shippingForm.interface";

describe("shipping form validations", () => {
  test("should return an object with errors for invalid form values", () => {
    const formValues: ShippingForm = {
      firstName: "",
      lastName: "",
      district: "",
      address: "",
      reference: "",
      phoneNumber: "",
    };
    
    const errors = validateForm(formValues);

    expect(errors).toEqual({
      firstName: "Nombre requerido.",
      lastName: "Apellido requerido.",
      district: "Seleccione un distrito.",
      address: "Dirección requerida.",
      reference: "Referencia requerida.",
      phoneNumber: "Celular requerido.",
    });
  });

  test("should return an empty object for valid form values", () => {
    const formValues: ShippingForm = {
      firstName: "Victor",
      lastName: "Ccanchi",
      district: "Lima",
      address: "123 Calle Lima",
      reference: "Ovalo Grau",
      phoneNumber: "123456789",
    };

    const errors = validateForm(formValues);
    expect(errors).toEqual({});
  });

});



