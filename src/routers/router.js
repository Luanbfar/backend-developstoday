const express = require("express");
const {
  fetchAllCountries,
  getCountryInfo,
  getFlags,
  getPopulationData,
} = require("../controllers/CountriesController");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/countries", fetchAllCountries);
router.get("/countryinfo", getCountryInfo);
router.get("/flags", getFlags);
router.get("/population", getPopulationData);

module.exports = router;
