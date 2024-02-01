import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/admin";

function CategoryTable() {
  const { data, isLoading, error } = useQuery(["get-category"], getCategories);
//   console.log({ data, isLoading, error });
  return <div></div>;
}

export default CategoryTable;
