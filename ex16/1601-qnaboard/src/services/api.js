const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzMxMzIwNzMxLCJleHAiOjE3MzE0MDcxMzF9.z51NYLqtOWeMc2HdxZtbXSJRfwNAeheAch4heSfJDKiUBFi5gs4AUyI0XfkL_TKa0HyOzzwvs9ynCuTVFeeB7w";
export async function fetchQuestions(pageNum) {
  const response = await fetch(
    `http://localhost:8080/question/list?page=${pageNum - 1}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
}
export async function fetchQuestionDetail(postId) {
  const response = await fetch(
    `http://localhost:8080/question/detail/${postId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
}
export async function createQuestion(question) {
  const response = await fetch(`http://localhost:8080/question/create`, {
    method: "POST",
    headers: {
      "Content-Type": " application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(question),
  });
  return response.status;
}
