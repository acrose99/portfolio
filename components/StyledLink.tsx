import Link from "next/link";
interface Props {
  href: string;
  className: string;
  title: string;
}

function StyledLink(props: Props) {
  const {} = props;
  return (
    <Link href={props.href}>
      <a
        style={
          {
            // color: theme.text === '#678983' ? theme.secondary : theme.text,
          }
        }
        className={props.className}
        title={props.title}
      >
        {props.title}
      </a>
    </Link>
  );
}

export default StyledLink;
