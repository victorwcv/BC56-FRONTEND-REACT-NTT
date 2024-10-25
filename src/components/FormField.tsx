import styles from "../css/formField.module.css";
import FormFieldSelect from "./FormFieldSelect";

interface Props {
  label: string;
  type: string;
  as?: string;
  options?: string[];
  name: string;
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
      <FormFieldSelect
        label={label}
        name={name}
        value={value}
        error={error}
        options={options}
        onChange={onChange}
        disabled={disabled}
      />
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
