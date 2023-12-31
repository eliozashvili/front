interface InputTypes {
  type: string;
  value: string | number;
  placeholder?: string;
  extraClass?: string;
}

const Input = function ({ type, placeholder, value, extraClass }: InputTypes) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`${extraClass} border-gray-100 text-gray-600 border my-3 py-0.5 px-3 rounded-[3px] hover:shadow-md focus:outline-none hover:border-gray-300 focus:border-gray-400`}
    />
  );
};

export default Input;
