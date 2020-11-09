import React from "react";
import { List, Panda } from "../types";
import PandaItem from "./PandaItem";
import { ListGroup } from "reactstrap";

const PandasList: React.FC<List> = (props: List) => {
  const { pandas } = props;

  return (
    <div className="container">
      <ListGroup>
        {pandas &&
          pandas.map((panda: Panda) => (
            <PandaItem
              key={panda.key}
              name={panda.name}
              interests={panda.interests}
              onPress={() => panda.key}
            />
          ))}
      </ListGroup>
    </div>
  );
};

export default PandasList;
