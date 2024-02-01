import React from "react";

import CategoryForm from './../components/templates/CategoryForm';
import CategoryTable from "../components/templates/CategoryTable";

function Admin() {
  return (
    <div>
      <CategoryTable />
      <CategoryForm />
    </div>
  );
}

export default Admin;
