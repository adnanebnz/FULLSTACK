"use strict";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 */
