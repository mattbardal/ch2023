import fetch from "node-fetch";

export const usePost = async <T, R>(url: string, body: T): Promise<R> => {
  console.log("test");
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  console.log("res", res);

  return res.json();
};
