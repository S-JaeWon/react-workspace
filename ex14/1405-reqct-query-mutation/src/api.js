export async function fetchPosts(pageNumber) {
  //   throw new Error("에러");
  const response = await fetch(
    `http://localhost:4000/posts?_per_page=10&_page=${pageNumber}` //jsonserver 일때는 limit -> per_page
  );
  return response.json();
}

export async function fetchComments(postId) {
  const response = await fetch(
    `http://localhost:4000/comments?postId=${postId}`
  );
  return response.json();
}

export async function deletePost(postId) {
  const response = await fetch(`http://localhost:4000/posts/${postId}`, {
    method: "DELETE",
  });
  return response.json();
}
export async function updatePost(postId) {
  const response = await fetch(`http://localhost:4000/posts/${postId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "React.js Forever!!!" }),
  });
  return response.json();
}
