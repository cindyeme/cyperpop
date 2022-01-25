import { useState } from "react";
import tw from "twin.macro";

const Read = tw.span`tracking-wider text-sm text-blue-400`;

export default ({
  minlength = 200,
  description="Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  }) => {

  const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      {isReadMore ? text.props.children.slice(0, minlength) : text}
      <Read onClick={toggleReadMore}>
        {isReadMore ? "...read more" : " show less"}
      </Read>
    </>
  );
  };
  return (
      <ReadMore>
        {description}
      </ReadMore>
    );
};
