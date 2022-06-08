const links = (txt) => {
  const linkRegex = /\[[^\]]+\]\([^)]+\)/g;
  const matches = [...txt.matchAll(linkRegex)];
  const links = matches.map(([a]) => {
    const [txt, link] = a.slice(1, -1).split("](");
    return <a href={link}>{txt}</a>;
  });
  const parts = [];
  txt.split(linkRegex).forEach((part, i) => {
    parts.push(part);
    parts.push(links[i]);
  });
  return <>{parts.filter(Boolean)}</>;
};

export default function md([str]) {
  const components = str
    .trim()
    .split(/\n+/)
    .map((txt) => {
      let Element = "p";
      if (txt.startsWith("-")) {
        return (
          <ul>
            <li>{txt.replace(/^-+\s+/, "")}</li>
          </ul>
        );
      }
      if (txt.startsWith("#")) {
        const level = txt.match(/^#+/);
        Element = `h${level[0].length}`;
        txt = txt.replace(/^#+/, "");
      }
      return <Element>{links(txt)}</Element>;
    });

  return () => components;
}
