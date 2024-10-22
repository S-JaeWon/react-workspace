import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchComments } from "./api";

function PostDetail({ selectedPost }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments", selectedPost],
    queryFn: () => fetchComments(selectedPost),
    staleTime: 3000,
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  console.log("PostDetail>>>", data);

  return <div>PostDetail</div>;
}

export default PostDetail;
