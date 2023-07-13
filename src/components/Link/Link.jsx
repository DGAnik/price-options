import React from "react";

const Link = ({ route }) => {
  return (
    <li className="mr-6 hover:bg-purple-600 pl-6 pr-6">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
