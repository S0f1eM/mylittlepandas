import React from "react";
import { List, Panda } from "../types";

import PandasItem from "./PandasItem";
import { ListGroup, ListGroupItem } from "reactstrap";

const PandasList: React.FC<List> = (props: List) => {
  const { pandas } = props;
  return (
    <ListGroup>
      {pandas.map((panda: Panda) => (
        <ListGroupItem
          className="justify-content-between"
          onClick={() => alert("Ce panda a l'identifiant numéro " + panda.key)}
        >
          <PandasItem
            key={panda.key}
            name={panda.name}
            image={panda.image}
            interests={panda.interests}
          />
        </ListGroupItem>
      ))}
      ;
    </ListGroup>
  );
};

export default PandasList;
