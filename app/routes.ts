import { type RouteConfig, index, route } from "@react-router/dev/routes";

// index for homw routes only
export default [
  index("routes/items.tsx"),
  route("new", "routes/newItem.tsx"),
] satisfies RouteConfig;
