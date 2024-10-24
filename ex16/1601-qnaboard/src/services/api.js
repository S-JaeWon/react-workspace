const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzI5NzY3MjI3LCJleHAiOjE3Mjk4NTM2Mjd9.SJ7wnhm_6_rgI6PxYaBPmkBJ7CI3hw4F-vi6pFHcI5Mob02W72nsloV4zWq1aie5XQByb3jdJHXgN7mbzqxQrQ";
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
