const mainLinks = [
  "Women's",
  "Men's",
  "On the Street",
  "The Catwalk",
  "AdWatch",
  "About",
];

const footerLinks = [
  "Home",
  "Women's",
  "Men's",
  "On the Street",
  "The Catwalk",
  "AdWatch",
  "About",
  "Tips",
];

export default function Nav({ location }) {
  const isFooter = location === "footer";

  const links = isFooter ? footerLinks : mainLinks;

  const navigationClass = isFooter
    ? "footer-navigation" : "main-navigation";

  const navigationLabel = isFooter
    ? "Footer Navigation" : "Main Navigation";

  return (
    <nav aria-label={navigationLabel} role="navigation">
      <ul className={navigationClass}>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}