interface InputProps {
  placehloder: string;
  ref?: any
}

const Input = ({
  placehloder,ref
}: InputProps) => {
  return (
    <input
      className="px-4 py-2 border border-zinc-200 outline-none rounded m-2"
      placeholder={placehloder}
      ref={ref}
      type="text"
    />
  );
};

export default Input;
