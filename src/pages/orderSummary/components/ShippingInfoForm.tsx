import styles from "../css/ShippingInfoForm.module.css";
// hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../../hooks/useAppState";
import { useDistricts } from "../../../hooks/useDistricts";
import { useCartItems } from "../../../hooks/useCartItems";
import { validateForm } from "../../../validations/shippingFormValidations";
// components
import AlertModal from "../../../components/AlertModal";
import FormField from "../../../components/FormField";
// types
import { type ShippingForm } from "../../../types/interfaces/shippingForm.interface";
import { CommonMessages } from "../../../types/enums/commonMessages.enum";

function ShippingInfoForm() {
  const cartItems = useCartItems();
  const districts = useDistricts();
  const navigate = useNavigate();
  const { dispatch } = useAppState();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Partial<ShippingForm>>({});
  const [formValues, setFormValues] = useState<ShippingForm>({
    firstName: "",
    lastName: "",
    district: "",
    address: "",
    reference: "",
    phoneNumber: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setShowModal(true);
      console.log(formValues);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    if (formErrors[e.target.name as keyof ShippingForm]) {
      const updatedErrors = { ...formErrors, [e.target.name]: "" };
      setFormErrors(updatedErrors);
    }
  };

  const handleAlert = () => {
    setShowModal(false);
    dispatch({ type: "CLEAR_CART" });
    dispatch({
      type: "FILTER_PRODUCTS",
      payload: { category: "all", searchTerm: "" },
    });
    navigate("/");
  };

  const disabled = cartItems.length === 0;

  return (
    <>
      {showModal && (
        <AlertModal
          isOpen={showModal}
          handleAlert={handleAlert}
          imgSrc={"./images/success.png"}
          msg={CommonMessages.ORDER_SUCCESS}
        />
      )}
      <div className={styles.container}>
        <h3 className={styles.title}>Informacion de Envio</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.form__container}>
            <FormField
              label="Nombres"
              type="text"
              name="firstName"
              value={formValues.firstName}
              error={formErrors.firstName}
              placeholder="Ej: Juan"
              onChange={handleChange}
              disabled={disabled}
            />

            <FormField
              label="Apellidos"
              type="text"
              name="lastName"
              value={formValues.lastName}
              error={formErrors.lastName}
              placeholder="Ej: Perez"
              onChange={handleChange}
              disabled={disabled}
            />

            <FormField
              label="Distrito"
              type="text"
              as="select"
              options={districts}
              name="district"
              value={formValues.district}
              error={formErrors.district}
              onChange={handleChange}
              disabled={disabled}
            />

            <FormField
              label="Dirección"
              type="text"
              name="address"
              value={formValues.address}
              error={formErrors.address}
              placeholder="Ej: Calle 123"
              onChange={handleChange}
              disabled={disabled}
            />

            <FormField
              label="Referencia"
              type="text"
              name="reference"
              value={formValues.reference}
              error={formErrors.reference}
              placeholder="Ej: Av. Principal"
              onChange={handleChange}
              disabled={disabled}
            />
            <FormField
              label="Celular"
              type="text"
              name="phoneNumber"
              value={formValues.phoneNumber}
              error={formErrors.phoneNumber}
              placeholder="Ej: 123456789"
              onChange={handleChange}
              disabled={disabled}
            />
          </div>

          <button type="submit" className={styles.button} disabled={disabled}>
            Comprar
          </button>
        </form>
      </div>
    </>
  );
}

export default ShippingInfoForm;
