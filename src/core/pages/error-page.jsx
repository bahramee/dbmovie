import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>اوه!</h1>
      <p>صفحه مورد نظر یافت نشد!</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </div>
  );
}