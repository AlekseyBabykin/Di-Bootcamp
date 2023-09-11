const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "lucky.db.elephantsql.com",
    // port: 5432,
    user: "hhejxgon",
    password: "Jn5XXeqmyAPXWIOz9P9eA3Ze7NijPDNj", //fogot passworrd)
    database: "hhejxgon",
  },
});
const register = async () => {
  const trx = await db.transaction();
  try {
    const user = await db("myusers")
      .insert(
        {
          username: "bbb",
          email: "bbb@gmail.com",
        },
        ["username", "email"]
      )
      .transacting(trx);

    console.log("user=>", user);

    const hashpwd = await db("hashpwd")
      .insert(
        {
          username: user[0].username,
          password: "123456",
        },
        ["password", "username"]
      )
      .transacting(trx);

    console.log("hashpwd=>", hashpwd);

    await trx.rollback();
    // await trx.commit();
  } catch (error) {
    await trx.rollback();
  }
};
register();

// db.select("id", "name")
//   .from("products")
// db("products").select("id", "name", "price").orderBy("name");
//   .where({ id: 1 })
//   .insert(
//     [
//       {
//         name: "iKey",
//         price: 900,
//       },
//     ],
//     ["id", "name"]
//   )
//   .returning("*")
//   .update({ name: "iPhone14" }, ["name"])
db.raw("select id, name, price from products where id > ?", [3])
  .then((data) => {
    console.log(data.rows);
  })
  .catch((err) => {
    console.log(err);
  });
