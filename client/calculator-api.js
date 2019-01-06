const axios = require("axios");

const { CALCULATOR_PROTOCOL, CALCULATOR_HOST, CALCULATOR_PORT } = process.env;
const BASE_URL = `${CALCULATOR_PROTOCOL}://${CALCULATOR_HOST}:${CALCULATOR_PORT}`;

class CalculatorAPI {
  setTrackId(trackId) {
    this.trackId = trackId;
  }

  getTrackId() {
    return this.trackId;
  }

  add(nums) {
    const url = `${BASE_URL}/calculator/add`;
    const body = {
      Addends: nums
    };
    let options;

    const trackId = this.getTrackId();
    if (trackId) {
      options = {
        headers: {
          "X-Evi-Tracking-Id": trackId
        }
      };
    }

    return axios
      .post(url, body, options)
      .then(response => response.data.Sum)
      .catch(this.handleError);
  }

  substract(minuend, subtrahend) {
    const url = `${BASE_URL}/calculator/sub`;
    const body = {
      Minuend: minuend,
      Subtrahend: subtrahend
    };
    let options;

    const trackId = this.getTrackId();
    if (trackId) {
      options = {
        headers: {
          "X-Evi-Tracking-Id": trackId
        }
      };
    }

    return axios
      .post(url, body, options)
      .then(response => response.data.Difference)
      .catch(this.handleError);
  }

  multiply(nums) {
    const url = `${BASE_URL}/calculator/mult`;
    const body = {
      Factors: nums
    };
    let options;

    const trackId = this.getTrackId();
    if (trackId) {
      options = {
        headers: {
          "X-Evi-Tracking-Id": trackId
        }
      };
    }

    return axios
      .post(url, body, options)
      .then(response => response.data.Product)
      .catch(this.handleError);
  }

  divide(dividend, divisor) {
    const url = `${BASE_URL}/calculator/div`;
    const body = {
      Dividend: dividend,
      Divisor: divisor
    };
    let options;

    const trackId = this.getTrackId();
    if (trackId) {
      options = {
        headers: {
          "X-Evi-Tracking-Id": trackId
        }
      };
    }

    return axios
      .post(url, body, options)
      .then(response => response.data)
      .catch(this.handleError);
  }

  static handleError(error) {
    return Promise.reject(error.response.data);
  }
}

module.exports = CalculatorAPI;
