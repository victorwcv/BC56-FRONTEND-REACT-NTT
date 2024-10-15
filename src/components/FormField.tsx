import { ShippingForm } from "../types/interfaces/shippingForm.interface";
import styles from "../css/formField.module.css";

interface Props {
  label: string;
  type: string;
  as?: string;
  options?: string[];
  name: keyof ShippingForm;
  value: string;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const FormField: React.FC<Props> = ({
  label,
  type,
  as,
  options,
  name,
  value,
  error,
  placeholder,
  onChange,
  disabled,
}) => {
  if (as === "select") {
    return (
      <div className={styles.field__container}>
        <label htmlFor={name}>{label}</label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="">Seleccione una categoria</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <p className={styles.field__error}>{error}</p>}
      </div>
    );
  }

  return (
    <div className={styles.field__container}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p className={styles.field__error}>{error}</p>}
    </div>
  );
};

export default FormField;
