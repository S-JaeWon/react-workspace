import { useEffect, useState } from "react";
import { deletePost, fetchPosts, updatePost } from "./api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PostDetail from "./PostDetail";

function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  // prefetching 시작
  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage >= 10) return;
    const nextPage = currentPage + 1;
    queryClient.prefetchQuery({
      ueryKey: ["posts", nextPage],
      queryFn: () => fetchPosts(nextPage),
    });
  }, [currentPage, queryClient]);
  // prefetching 끝

  const { data, isLoading, isError, error } = useQuery({
    //fetchng 서버와 캐시에서 가져올때, loading 서버에서 가져올때
    queryKey: ["posts", currentPage], // 해당 쿼리를 cache와 stale time 관점에서 식별하는 방법
    queryFn: () => fetchPosts(currentPage),
    staleTime: 3000, // 기본값 0(항상 최신의 데이터 지향), 패칭하고 '3초'가 지나면 fresh -> stale 바뀌게 설정했음
  });

  const deleteMutation = useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (postId) => updatePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  // console.log(data);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  // if (!data) {
  //   return <div />;
  // }

  return (
    <>
      <ul>
        {data.data.map((post) => (
          <li
            key={post.id}
            style={{
              listStyleType: "none",
              cursor: "pointer",
              fontWeight: selectedPost?.id === post.id && "bold",
            }}
            onClick={() => {
              setSelectedPost(post);
            }}
          >
            {post.id}.&nbsp;{post.title}
          </li>
        ))}
      </ul>
      <div>
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= 10}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next page
        </button>
        <hr />
        {selectedPost && (
          <PostDetail
            post={selectedPost}
            deleteMutation={deleteMutation}
            updateMutation={updateMutation}
          />
        )}
      </div>
    </>
  );
}

export default Posts;
