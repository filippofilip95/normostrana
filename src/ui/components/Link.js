import {Link as RouterLink} from "preact-router/match";

function Link(props) {
  return (
    <RouterLink
      activeClassName="active"
      href={props.href}
    >
      {props.children}
    </RouterLink>
  );
}

export default Link;