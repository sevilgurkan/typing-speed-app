import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="text-center">
      <p className="">Something went wrong</p>
      <pre className="text-sm text-red-500">{error.message}</pre>
      <button
        onClick={() => {
          resetErrorBoundary();
          location.reload();
        }}
        className="hover:text-white"
      >
        Try again
      </button>
    </div>
  );
}

export function BoardErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}
