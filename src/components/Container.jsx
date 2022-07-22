import clsx from "clsx";

export function Container({ children, className }) {
  return <div className={clsx("max-w-4xl mx-auto", className)}>{children}</div>;
}
