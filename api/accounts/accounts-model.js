const db = require("../../data/db-config");
const getAll = () => {
  // KODLAR BURAYA
  return db("accounts");
};

const getById = (id) => {
  // KODLAR BURAYA
  return db("accounts").where("id", id).first();
};

const create = (account) => {
  // KODLAR BURAYA
  return db("accounts").insert(account);
};

const updateById = async (id, account) => {
  // KODLAR BURAYA
  await db("accounts").where("id", id).update(account);
  return await getById(id);
};

const deleteById = (id) => {
  // KODLAR BURAYA
  return db("accounts").where("id", id).del();
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
