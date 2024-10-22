import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchComments } from "./api";

function PostDetail({ post, updateMutation, deleteMutation }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => fetchComments(post.id),
    staleTime: 2000,
  });
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  console.log("PostDetail>>>", data);

  return (
    <div>
      <h3>{post.title}</h3>
      <div>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        {deleteMutation.isPending && <p>Deleting the post</p>}
        {deleteMutation.isError && (
          <p>Error : {deleteMutation.error.message}</p>
        )}
      </div>
      <div>
        <button onClick={() => updateMutation.mutate(post.id)}>Udpate</button>
        {updateMutation.isPending && <p>Updating the post</p>}
        {updateMutation.isError && (
          <p>Error : {updateMutation.error.message}</p>
        )}
        {updateMutation.isSuccess && <p>Post was updated</p>}
      </div>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email} : {comment.body}
        </li>
      ))}
    </div>
  );
}

export default PostDetail;
