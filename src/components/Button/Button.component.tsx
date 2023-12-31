interface ButtonTypes {
  type: 'submit' | 'reset' | 'button';
  text: string;
  extraClass?: string;
}

const Button = function ({ type, text, extraClass }: ButtonTypes) {
  return (
    <button
      type={type}
      className={`${extraClass} border-gray-100 text-gray-600 border my-3 py-0.5 px-3 rounded-[3px] hover:shadow-md hover:border-gray-300 active:shadow-inner active:text-gray-400`}
    >
      {text}
    </button>
  );
};

export default Button;
