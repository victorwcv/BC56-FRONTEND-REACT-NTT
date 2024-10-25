import styles from "../css/formField.module.css";

interface Props {
  label: string;
  name: string;
  value: string;
  error?: string;
  options?: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

const FormFieldSelect: React.FC<Props> = ({
  label,
  name,
  value,
  error,
  options,
  onChange,
  disabled,
}) => {
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
};

export default FormFieldSelect;
