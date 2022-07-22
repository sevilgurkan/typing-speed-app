import clsx from "clsx";
import PropTypes from "prop-types";

export function Container({ children, className }) {
  return <div className={clsx("mx-auto max-w-4xl", className)}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
