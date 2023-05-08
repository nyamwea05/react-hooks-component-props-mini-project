
import React from "react";

function About(props) {
  const imageSrc = props.image ? props.image : "https://via.placeholder.com/215";
  const altText = "blog logo";

  return (
    <aside>
      <img src={imageSrc} alt={altText} />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;