export interface Props {
  id: string;
}

export default function ScrollPoint({ id }: Props) {
  return <span id={id} className="ScrollPoint"></span>;
}
