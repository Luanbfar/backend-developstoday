const axios = require("axios");
const {
  DATE_NAGER_URL,
  FLAGS_URL,
  POPULATION_URL,
} = require("../config/BaseUrls");

const fetchAllCountries = async (req, res) => {
  try {
    const response = await axios.get(
      `${DATE_NAGER_URL}/api/v3/AvailableCountries`
    );

    if (response.data) {
      res.status(200).send(response.data);
      return;
    }
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.message });
  }
};

const getCountryInfo = async (req, res) => {
  try {
    const { countryCode } = req.query;
    const response = await axios.get(
      `${DATE_NAGER_URL}/api/v3/CountryInfo/${countryCode}`
    );

    if (response.data) {
      res.status(200).send(response.data);
      return;
    }
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.message });
  }
};

const getPopulationData = async (req, res) => {
  try {
    const response = await axios.get(POPULATION_URL);

    if (response.data) {
      res.status(200).send(response.data);
      return;
    }

    res.status(404);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.message });
  }
};

const getFlags = async (req, res) => {
  try {
    const response = await axios.get(FLAGS_URL);

    if (response.data) {
      res.status(200).send(response.data);
      return;
    }

    res.status(404);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  fetchAllCountries,
  getCountryInfo,
  getFlags,
  getPopulationData,
};
