import classNames from "classnames";

interface ButtonProps {
  texto: String;
  className: String;
}

export function Button(props: ButtonProps) {
  const btnClass = classNames(
    "bg-blue-900 py-2 px-4 text-white rounded-full font-inter text-sm",
    props.className ?? ""
  );
  return (
    <>
      <button className={btnClass}>{props.texto}</button>
    </>
  );
}
