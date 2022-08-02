import classNames from "classnames";

interface CardProps {
  tipo: "primario" | "secundario";
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ tipo, children, className }: CardProps) => {
  return (
    <div
      className={classNames(
        `card rounded-lg p-7 ${className}`,
        {
          "bg-blue-200 text-gray-900": tipo == "secundario",
        },
        {
          "bg-gray-900 text-white": tipo == "primario",
        }
      )}
    >
      {children}
    </div>
  );
};
