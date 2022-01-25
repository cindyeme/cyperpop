import tw from 'twin.macro';

const Inputt = tw.input`px-3 sm:px-4 w-full h-16 mt-3 border placeholder-gray-700 focus:border-gray-700 active:border-gray-700 hover:border-gray-700 rounded-md font-medium text-base`;
const Textarea = tw.textarea`px-3 py-4 bg-black w-full mt-3 border placeholder-gray-500 focus:border-gray-700 active:border-gray-700 hover:border-gray-700 rounded-md font-medium text-base`;
const Selectt = tw.select`px-3 sm:px-4 w-full h-[54px] border bg-black text-white focus:border-gray-700 border-0 active:border-gray-700 hover:border-gray-700 rounded-md font-medium text-base focus:border-blue-400 focus:outline-none transition duration-200 pr-6`;
const Label = tw.label`text-base font-semibold text-left text-black tracking-wide`;
const Wrap = tw.div`flex flex-col space-y-4 relative`;
const Option = tw.option`text-gray-700`;

// Input
export const Input = ({ name, label, type, disabled, style, className, autoFocus, ...rest }) => (
  <Wrap>
    {label ? (
      <Label htmlFor={name} style={style}>
        {label}
      </Label>
    ) : (
      <></>
    )}
    <Inputt id={name} type={type} name={name} disabled={disabled} autoFocus={autoFocus} {...rest} />
  </Wrap>
);

// Textarea
export const TextArea = ({ name, label, type, disabled, style, className, autoFocus, ...rest }) => (
  <Wrap>
    {label ? (
      <Label htmlFor={name} style={style}>
        {label}
      </Label>
    ) : (
      <></>
    )}
    <Textarea id={name} type={type} name={name} disabled={disabled} autoFocus={autoFocus} {...rest} />
  </Wrap>
);

// Select
export const Select = ({ choices, label, name, onChange, defaultValue, style, disabled, value, ...rest }) => {
  const currentValue = value || defaultValue;
  return (
    <Wrap>
      {label ? (
        <Label htmlFor={name} style={style}>
          {label}
        </Label>
      ) : (
        <></>
      )}
      <Selectt id={name} name={name} value={currentValue} onChange={onChange} {...rest}>
        <Option value={defaultValue} disabled>
          {defaultValue}
        </Option>
        {choices.map((choice, index) => (
          <option key={index} value={choice}>
            {choice}
          </option>
        ))}
      </Selectt>
    </Wrap>
  );
};
