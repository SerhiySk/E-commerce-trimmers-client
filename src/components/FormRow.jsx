const FormRow = ({ type, name, value, label, placeholder, handleChange }) => {
  return (
    <div className="form-row">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        autoComplete="on"
        placeholder={placeholder}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
export default FormRow;
