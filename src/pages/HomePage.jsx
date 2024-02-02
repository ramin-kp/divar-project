import { useQuery } from "@tanstack/react-query";

import Main from "../components/templates/Main";
import Sidebar from "../components/templates/Sidebar";
import { getCategories } from "../services/admin";
import { getAllPost } from "../services/user";
import Loader from "../components/Loader";

function HomePage() {
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-category"],
    getCategories
  );
  const { data: posts, isLoading: postLoading } = useQuery(
    ["get-all-post"],
    getAllPost
  );
  return (
    <div style={{ display: "flex", columnGap: "40px" }}>
      {categoryLoading || postLoading ? (
        <Loader />
      ) : (
        <>
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </>
      )}
    </div>
  );
}

export default HomePage;
