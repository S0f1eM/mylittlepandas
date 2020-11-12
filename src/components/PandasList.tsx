import React from "react";
import { List, Panda } from "../types";
import PandaItem from "./PandaItem";
import { ListGroup } from "reactstrap";

const PandasList: React.FC<List> = (props: List) => {
  const { pandas, onSelect } = props;

  return (
    <div className="container" style={{ margin: "3em 0" }}>
      <ListGroup>
        {pandas &&
          pandas.map((panda: Panda) => (
            <PandaItem
              key={panda.key}
              name={panda.name}
              interests={panda.interests}
              onPress={() => onSelect(panda.key)}
            />
          ))}
      </ListGroup>
    </div>
  );
};

export default PandasList;
