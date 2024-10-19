import { fetchPosts } from "./api";
import { useQuery } from "@tanstack/react-query";

function Posts() {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    //fetchng 서버와 캐시에서 가져올때, loading 서버에서 가져올때
    queryKey: ["posts"], // 해당 쿼리를 cache와 stale time 관점에서 식별하는 방법
    queryFn: fetchPosts,
    staleTime: 3000, // 기본값 0(항상 최신의 데이터 지향)
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  if (!data) {
    return <div />;
  }

  return (
    <>
      <ul>
        {data.length > 0 &&
          data.map((post) => (
            <li key={post.id} style={{ listStyleType: "none" }}>
              {post.id}. {post.title}
            </li>
          ))}
      </ul>
      {/* <div>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div> */}
    </>
  );
}

export default Posts;
