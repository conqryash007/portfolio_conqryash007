import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Link to={`/${props.id}/places`}>
        <div className="w-full max-w-xs bg-gray-900 flex item-ceter justify-evenly rounded-lg sahdow-lg p-2 hover:bg-yellow-900">
          <div className="self-center">
            <img
              className="w-12 h-12 rounded-full object-left flex"
              src={props.image}
              alt={props.name}
            />
          </div>
          <div className="text-red-500">
            <h2 className="">{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default UserItem;
