import Kanban from "components/Kanban";
import LogoComponent from "components/LogoComponent";
import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as DropdownIcon } from "assets/icon/dropdown-icon.svg";

const Main = () => {
  return (
    <div id="main" className="main">
      <div className="main-heading">
        <h1 className="main-heading--title">
          <LogoComponent size={36} /> Task List
        </h1>
        <div className="main-heading--sub-title">
          Use this template to track your personal tasks. <br />
          Click <span>+&nbsp;&nbsp;New</span> to create a new task directly on
          this board.
          <br />
          Click an existing task to add additional context or subtasks.
        </div>
      </div>
      <div className="main-content">
        <div className="main-content__nav">
          <Button>
            New{" "}
            <span>
              <DropdownIcon />
            </span>
          </Button>
        </div>
        <div className="main-content__kanban">
          <Kanban />
        </div>
      </div>
    </div>
  );
};

export default Main;
