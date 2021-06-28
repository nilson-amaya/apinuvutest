CREATE DATABASE minibank;

--*****************************************************************************************************
-- Table: clients
-- DROP TABLE clients;

CREATE TABLE clients
(
    id_client serial,
    firstname character varying (50) NOT NULL,
    lastname character varying (50) NOT NULL,
    email character varying (100) NOT NULL,
    phone character varying (50) NOT NULL, 
    city character varying (20) NOT NULL, 

    PRIMARY KEY (id_client)
);
--select * from clients
--
--*****************************************************************************************************
-- Table: credit_cards
-- DROP TABLE credit_cards;

CREATE TABLE credit_cards
(
    id_credit_card serial,
    id_client int,
    entity character varying (200) NOT NULL, 
    pan bigint NOT NULL,
    expiration_date date,
    international_brand character varying (50) NOT NULL,
    cvc int NOT NULL,
    card_type character varying (20) NOT NULL,

    PRIMARY KEY (id_credit_card),
    FOREIGN KEY (id_client) REFERENCES clients(id_client)

);

COMMENT ON COLUMN credit_cards.pan IS 'Personal Account Number, es el número de tarjeta';
COMMENT ON COLUMN credit_cards.cvc IS 'Dígito para compras online';
--select * from credit_cards
--
--*****************************************************************************************************
