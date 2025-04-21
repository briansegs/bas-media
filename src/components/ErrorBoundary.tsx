import { isRouteErrorResponse, useRouteError } from "react-router";

export function RootErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // Data thrown via throw new Response(...)
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data ?? "No additional details"}</p>
      </div>
    );
  } else if (error instanceof Error) {
    // JS Error
    return (
      <div>
        <h1>Unexpected Error</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
