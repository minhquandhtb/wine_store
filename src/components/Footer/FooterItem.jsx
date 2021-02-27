import React from "react";

function FooterItem(props) {
  const { items, title } = props;

  const listItems = items.map((e, i) => (
    <li key={i} className="list-item">
      <a href={e.href}>{e.text}</a>
    </li>
  ));

  return (
    <div className="contact__1">
      <h6>{title}</h6>
      <ul>{listItems}</ul>
    </div>
  );
}

export default FooterItem;
