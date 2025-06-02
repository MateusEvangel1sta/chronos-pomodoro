import styles from './styles.module.css';

type DefaultButtonProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon }: DefaultButtonProps) {
  return (
    <>
      <button className={styles.button} {...props}></button>
    </>
  );
}
