const Input = ({
  onChange,
  placehloder,
}: {
  placehloder: string;
  onChange: () => void;
}) => {
  return (
    <input
      className="px-4 py-2 border outline-none rounded m-2"
      placeholder={placehloder}
      onChange={onChange}
      type="text"
    />
  );
};

export default Input;
