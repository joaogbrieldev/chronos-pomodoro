type DefaultInputProps = {
  id: string;
  label: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, label }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </>
  );
}
