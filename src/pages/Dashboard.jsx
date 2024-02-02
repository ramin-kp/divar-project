import React from "react";
import PostForm from "../components/templates/PostForm";
import PostTable from "../components/templates/PostTable";

function Dashboard() {
  return (
    <div>
      <PostForm />
      <PostTable />
    </div>
  );
}

export default Dashboard;
