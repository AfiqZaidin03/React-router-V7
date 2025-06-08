import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Index for home route only
export default [
  index("routes/items.tsx"),
  route("new", "routes/newItem.tsx"),
] satisfies RouteConfig;
