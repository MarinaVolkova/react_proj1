import { Navigate, useLocation } from "react-router-dom";

function GuestRoute({ children, ...rest }) {
  const auth = true;
  const location = useLocation();
  const url = new URLSearchParams(location.search.slice(1));

  return auth ? <Navigate to={url.get("redirect") || "/"} /> : children;
}

export default GuestRoute;