type DefaultInputProps = {
  id: string;
  label: string;
} & React.ComponentProps<'input'>;

import styles from './styles.module.css';
export function DefaultInput({ id, type, label, ...rest }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} className={styles.input} {...rest} />
    </>
  );
}
