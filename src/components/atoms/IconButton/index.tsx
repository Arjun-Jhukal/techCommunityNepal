interface Props {
  children: React.ReactElement;
  onClick: () => void;
}
export default function IconButton(props: Readonly<Props>): JSX.Element {
  const { children, onClick } = props;

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
