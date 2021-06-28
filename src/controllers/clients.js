const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Nilson.a20+",
  database: "minibank",
  port: "5432",
});

const getClients = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM clients ORDER BY id_client ASC"
  );
  res.status(200).json(response.rows);
};

const getClientById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query(
    "SELECT * FROM clients WHERE id_client = $1",
    [id]
  );
  res.json(response.rows);
};

const createClient = async (req, res) => {
  const { firstname, lastname, email, phone, city } = req.body;
  const response = await pool.query(
    "INSERT INTO clients (firstname, lastname, email, phone, city) VALUES ($1, $2, $3, $4, $5)",
    [firstname, lastname, email, phone, city]
  );
  res.json({
    message: "Client Added successfully",
    body: {
      Client: { firstname, lastname, email, phone, city },
    },
  });
};

const updateClient = async (req, res) => {
  const id = parseInt(req.params.id);
  const { firstname, lastname, email, phone, city } = req.body;

  const response = await pool.query(
    "UPDATE clients SET firstname= $1, lastname= $2, email= $3, phone= $4, city= $5 WHERE id_client = $6",
    [firstname, lastname, email, phone, city, id]
  );
  res.json("Client Updated Successfully");
};

const deleteClient = async (req, res) => {
  const id = parseInt(req.params.id);
  await pool.query("DELETE FROM clients where id_client = $1", [id]);
  res.json(`Client ${id} deleted Successfully`);
};

module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
