const { Router } = require("express");
const router = Router();

// Clients------------------------
const {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/clients");

router.get("/clients", getClients);
router.get("/clients/:id", getClientById);
router.post("/clients", createClient);
router.put("/clients/:id", updateClient);
router.delete("/clients/:id", deleteClient);

// Credit Cards------------------------
const {
  getCreditCards,
  getCreditCardById,
  createCreditCard,
  updateCreditCard,
  deleteCreditCard,
} = require("../controllers/credit_cards");

router.get("/credit-cards", getCreditCards);
router.get("/credit-cards/:id", getCreditCardById);
router.post("/credit-cards", createCreditCard);
router.put("/credit-cards/:id", updateCreditCard);
router.delete("/credit-cards/:id", deleteCreditCard);

module.exports = router;
