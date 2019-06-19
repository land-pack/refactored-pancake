import React, { Component } from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
  Progress
} from "shards-react";
import image from "../avatars/3.jpg";

import Avatar from "./Avatar";

class UserDetails extends Component {
  state = {
    userDetails: {
      avatar: "https://api.adorable.io/avatars/129/abott@adorable.png",
      name: "frank",
      jobTitle: "IT",
      performanceReportTitle: "aaa",
      performanceReportValue: 20,
      metaValue: "ww"
    }
  };
  render() {
    const { userDetails } = this.state;
    return (
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={userDetails.avatar}
              alt={userDetails.name}
              width="110"
            />
          </div>
          {/* <ImageField source="url" title="title" /> */}
          <h4 className="mb-0">{userDetails.name}</h4>
          <span className="text-muted d-block mb-2">
            {userDetails.jobTitle}
          </span>
          <Button pill outline size="sm" className="mb-2">
            <i className="material-icons mr-1">person_add</i> Follow
          </Button>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="px-4">
            <div className="progress-wrapper">
              <strong className="text-muted d-block mb-2">
                {userDetails.performanceReportTitle}
              </strong>
              <Progress
                className="progress-sm"
                value={userDetails.performanceReportValue}
              >
                <span className="progress-value">
                  {userDetails.performanceReportValue}%
                </span>
              </Progress>
            </div>
          </ListGroupItem>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
              {userDetails.metaTitle}
            </strong>
            <span>{userDetails.metaValue}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default UserDetails;
