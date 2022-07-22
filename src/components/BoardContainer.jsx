import PropTypes from "prop-types";

export function BoardContainer({ children }) {
  return (
    <div className="primary-border rounded-md p-2 shadow-lg shadow-black">
      {children}
    </div>
  );
}

BoardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
