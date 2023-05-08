import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview }) => {
  const minutes = Math.ceil(preview.split(' ').length / 200);
  let emoji = '';

  if (minutes < 30) {
    const coffeeCups = Math.ceil(minutes / 5);
    emoji = '☕️'.repeat(coffeeCups);
  } else {
    const bentoBoxes = Math.ceil(minutes / 10);
    emoji = '🍱'.repeat(bentoBoxes);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <span>{emoji} {minutes} min read</span>
    </article>
  );
}

export default Article;