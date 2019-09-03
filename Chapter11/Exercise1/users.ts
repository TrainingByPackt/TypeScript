const userData = [
  { id: 1, email: "test@test1.com" },
  { id: 2, email: "test@test2.com" },
  { id: 3, email: "test@test3.com" },
  { id: 4, email: "test@test4.com" },
  { id: 5, email: "test@test5.com" }
];

export async function getUser(id: number) {
  return new Promise<{ id: number; email: string }>(res => {
    setTimeout(() => {
      res(userData[id]);
    }, 1000);
  });
}

const query = () => {
  const ids = [1, 4, 5];

  return ids.map(async id => {
    const item = await getUser(id);

    if (item) {
      return `ID: ${item.id} Email: ${item.email}`;
    } else {
      return "Loading...";
    }
  });
};

query(); //?
