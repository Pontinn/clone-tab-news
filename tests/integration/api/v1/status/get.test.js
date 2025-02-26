test("GET /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  // Check if the response status is 200
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  // Check if the response body is defined
  expect(responseBody.updated_at).toBeDefined();

  // Parse the responseBody.updated_at to a valid format
  const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();
  // Check if responseBody are equal to parsedUpdateAt
  expect(responseBody.updated_at).toEqual(parsedUpdateAt);
  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual("100");
  expect(responseBody.dependencies.database.used_connections).toEqual(1);
});
