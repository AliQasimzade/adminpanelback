const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const company = new Schema({
    icon: {
        type: String,

      },
      splashScreen: {
        type: String,

      },
      socialLinks: {
        type: Object,

      },
      phone: {
        type: String
      },
      email: {
        type: String
      },
      termsAndConditions: {
        type: String
      },
      privacyPolicy: {
        type: String
      },
      address: {
        type: String
      }
}, { timestamps: true })

const Company = mongoose.model('companies', company);

module.exports = { Company }