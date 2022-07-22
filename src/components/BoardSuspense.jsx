import { Suspense } from "react";
import { Spinner } from "./Spinner";

export function BoardSuspense({ children, loaderClass }) {
  return (
    <Suspense fallback={<Spinner className={loaderClass} />}>
      {children}
    </Suspense>
  );
}
