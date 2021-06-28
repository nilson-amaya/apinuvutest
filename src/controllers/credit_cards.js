const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Nilson.a20+",
  database: "minibank",
  port: "5432",
});

const getCreditCards = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM credit_cards ORDER BY id_credit_card ASC"
  );
  res.status(200).json(response.rows);
};

const getCreditCardById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query(
    "SELECT * FROM credit_cards WHERE id_credit_card = $1",
    [id]
  );
  res.json(response.rows);
};

const createCreditCard = async (req, res) => {
  const {
    id_client,
    entity,
    pan,
    expiration_date,
    international_brand,
    cvc,
    card_type,
  } = req.body;
  const response = await pool.query(
    "INSERT INTO credit_cards (id_client, entity, pan, expiration_date, international_brand, cvc, card_type) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [
      id_client,
      entity,
      pan,
      expiration_date,
      international_brand,
      cvc,
      card_type,
    ]
  );
  res.json({
    message: "CreditCard Added successfully",
    body: {
      CreditCard: {
        id_client,
        entity,
        pan,
        expiration_date,
        international_brand,
        cvc,
        card_type,
      },
    },
  });
};

const updateCreditCard = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    id_client,
    entity,
    pan,
    expiration_date,
    international_brand,
    cvc,
    card_type,
  } = req.body;

  const response = await pool.query(
    "UPDATE credit_cards SET id_client= $1, entity= $2, pan= $3, expiration_date= $4, international_brand= $5, cvc= $6, card_type= $7 WHERE id_credit_card = $8",
    [
      id_client,
      entity,
      pan,
      expiration_date,
      international_brand,
      cvc,
      card_type,
      id,
    ]
  );
  res.json("CreditCard Updated Successfully");
};

const deleteCreditCard = async (req, res) => {
  const id = parseInt(req.params.id);
  await pool.query("DELETE FROM credit_cards where id_credit_card = $1", [id]);
  res.json(`CreditCard ${id} deleted Successfully`);
};

module.exports = {
  getCreditCards,
  getCreditCardById,
  createCreditCard,
  updateCreditCard,
  deleteCreditCard,
};
