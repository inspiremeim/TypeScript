type ButtonProps = {
  el: "button";
} & React.ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & React.ComponentPropsWithoutRef<"a">;

export default function Button(props: AnchorProps | ButtonProps) {
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
