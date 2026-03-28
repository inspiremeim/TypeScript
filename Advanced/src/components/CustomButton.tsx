type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type AnchorProps = React.ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

function isAnchorProps(props: AnchorProps | ButtonProps): props is AnchorProps {
  return "href" in props;
}

export default function CustomButton(props: AnchorProps | ButtonProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
