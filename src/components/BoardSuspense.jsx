import { Suspense } from "react";
import PropTypes from "prop-types";

import { Spinner } from "./Spinner";

export function BoardSuspense({ children, loaderClass }) {
  return (
    <Suspense fallback={<Spinner className={loaderClass} />}>
      {children}
    </Suspense>
  );
}

BoardSuspense.propTypes = {
  children: PropTypes.node.isRequired,
  loadClass: PropTypes.string,
};
