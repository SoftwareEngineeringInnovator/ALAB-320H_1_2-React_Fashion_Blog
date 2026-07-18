export default function Article({
  date,
  dateTime,
  title,
  image,
  imageAlt,
  text,
}) {
  return (
    <article>
      <time dateTime={dateTime}>{date}</time>

      <h2>{title}</h2>

      <img src={image} alt={imageAlt} />

      <p>{text}</p>

      <a className="continues-link" href="#">
        Continues...
      </a>
    </article>
  );
}