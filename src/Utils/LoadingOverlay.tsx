import React from "react";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

const LoadingOverlay: React.FC = props => {
  return (
    <div className="loading">
      <QueryBuilderIcon />
    </div>
  );
};

export default LoadingOverlay;
