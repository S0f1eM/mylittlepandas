import React from "react";
import { List, Panda } from "../types";

import PandasItem from "./PandasItem";
import { ListGroup, ListGroupItem } from "reactstrap";

const PandasList: React.FC<List> = (props: List) => {
  const { pandas, onClick } = props;

  return (
    <ListGroup>
      {pandas.map((panda: Panda) => (
        <ListGroupItem className="justify-content-between">
          <PandasItem
            key={panda.key}
            name={panda.name}
            image={panda.image}
            onClick={() =>
              alert("Ce panda a l'identifiant numéro " + panda.key)
            }
          />
        </ListGroupItem>
      ))}
      ;
    </ListGroup>
  );
};

export default PandasList;
