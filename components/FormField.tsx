type Props = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea?: boolean;
  setState: (value: string) => void;
};

const FormField = ({
  type,
  title,
  state,
  placeholder,
  isTextArea,
  setState,
}: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label htmlFor="" className="w-full text-gray-100">
        {title}
      </label>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
          required
        >
          {state}
        </textarea>
      ) : (
        <input
          type={type || "text"}
          placeholder={placeholder}
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
          required
        />
      )}
    </div>
  );
};

export default FormField;
