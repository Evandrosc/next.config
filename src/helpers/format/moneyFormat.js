import Dinero from "dinero.js";

const CentsToReais = (value) => {
  const parsedVal = parseInt(value.toString().replace(/\D/g, ''));
  return Dinero({
    amount: parsedVal || 0,
    currency: "BRL",
    precision: 2,
  }).toFormat("$0,0.00");
};

const ReaisToCents = (value) => {
  return parseInt(value.toString().replace(/\D/g, "")) * 100;
};

export { CentsToReais, ReaisToCents };
