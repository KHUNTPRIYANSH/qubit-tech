import React from "react";

import TeamCRD from "../../components/TeamCRD";
const Team = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div id="the-gym">
        <center>
          <div className="t-title">The Owners</div>
        </center>
        <div id="ownerz">
          <TeamCRD
            dp="./imgs/ow1.jpg"
            trName="Priyansh Khunt"
            trPost="Owner , coach"
          />
          <TeamCRD
            dp="./imgs/ow2.jpg"
            trName="Romil Khunt"
            trPost="Owner , coach"
          />
          <TeamCRD dp="./imgs/ow3.jpg" trName="KPD" trPost="Owner , coach" />
        </div>
      </div>
    </div>
  );
};

export default Team;
