import React from "react";
import { Panda } from "../types";
import { Media, Badge } from "reactstrap";

const PandasDetails = (panda: Panda, onClose: MouseEvent) => {
  return (
    <>
      <div className="container">
        <Media left top src={panda.image} alt="image" className="picture" />
        <Media body className="space-left">
          <h4>Name : {panda.name}</h4>
          <p>
            Interests:
            {panda.interests.map((interest) => (
              <Badge
                color="info"
                className="space-between"
                key={interest + panda.key}
              >
                {interest}
              </Badge>
            ))}
          </p>
        </Media>
        <button className="secondary" onClick={() => onClose()} />
      </div>
    </>
  );
};

export default PandasDetails;
