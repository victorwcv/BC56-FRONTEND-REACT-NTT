import { expect, test } from "vitest";
import {
  firstNameValidation,
  lastNameValidation,
  districtValidation,
  addressValidation,
  referenceValidation,
  phoneNumberValidation,
} from "./fieldsValidation";

const testMessage = "should return an error message for invalid form values or undefined for valid form values";

test(`firstNameValidation ${testMessage}`, () => {
  expect(firstNameValidation("")).toBe("Nombre requerido.");
  expect(firstNameValidation("test123")).toBe("Ingresar solo letras.");
  expect(firstNameValidation("test")).toBeUndefined();
});

test(`lastNameValidation ${testMessage}`, () => {
  expect(lastNameValidation("")).toBe("Apellido requerido.");
  expect(lastNameValidation("test123")).toBe("Ingresar solo letras.");
  expect(lastNameValidation("test")).toBeUndefined();
});

test(`districtValidation ${testMessage}`, () => {
  expect(districtValidation("")).toBe("Seleccione un distrito.");
  expect(districtValidation("test")).toBeUndefined();
});

test(`addressValidation ${testMessage}`, () => {
  expect(addressValidation("")).toBe("Dirección requerida.");
  expect(addressValidation("test")).toBeUndefined();
});

test(`referenceValidation ${testMessage}`, () => {
  expect(referenceValidation("")).toBe("Referencia requerida.");
  expect(referenceValidation("test")).toBeUndefined();
});

test(`phoneNumberValidation ${testMessage}`, () => {
  expect(phoneNumberValidation("")).toBe("Celular requerido.");
  expect(phoneNumberValidation("1234tg789")).toBe("Ingresar solo números.");
  expect(phoneNumberValidation("1234567")).toBe("Ingresar 9 dígitos.");
  expect(phoneNumberValidation("123456789")).toBeUndefined();
});
