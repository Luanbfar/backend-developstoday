require("dotenv").config();

const DATE_NAGER_URL = process.env.DATE_NAGER_URL;
const FLAGS_URL = process.env.FLAGS_URL;
const POPULATION_URL = process.env.POPULATION_URL;

module.exports = { DATE_NAGER_URL, FLAGS_URL, POPULATION_URL };