interface IInput {
  className?: string;
  onChange: (val: string) => any;
  placeholder?: string;
  type?: string;
  value: string;
  required?: boolean;
}

const Input = (props: IInput) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      required
    />
  );
};

export default Input;
