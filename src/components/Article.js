import React from "react";

function Article(props) {
  const dateStr = props.date ? props.date : "January 1, 1970";
  const minutesRead = props.minutes;

  const coffeeCups = Math.ceil(minutesRead / 5);
  const bentoBoxes = Math.ceil(minutesRead / 10);

  let emoji = "";
  if (minutesRead < 30) {
    emoji = "☕️";
  } else {
    emoji = "🍱";
  }

  let emojiStr = "";
  for (let i = 0; i < (minutesRead < 30 ? coffeeCups : bentoBoxes); i++) {
    emojiStr += emoji;
  }

  return (
    <article>
      <h3>{props.title}</h3>
      <small>{dateStr}</small>
      <p>{props.preview}</p>
      <p>{emojiStr + " " + minutesRead + " min read"}</p>
    </article>
  );
}

export default Article;