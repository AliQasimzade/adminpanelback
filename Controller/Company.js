const {Company} = require('../Model/Company.js');


const getCompany = async (req, res) => {

    try {
      const company = await Company.find();
      console.log(company);
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
      res.status(200).json(company);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const updateCompany = async (req, res) => {
    const company_id = req.params.id
    const { icon, splashScreen, socialLinks, phone, email, termsAndConditions, privacyPolicy, address } = req.body;

    try {
      const company = await Company.findOne();
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
  
      company.icon = icon ? icon : company.icon;
      company.splashScreen = splashScreen ? splashScreen : company.splashScreen;
      company.socialLinks = socialLinks ? socialLinks : company.socialLinks;
      company.phone = phone ? phone : company.phone;
      company.email = email ? email : company.email;
      company.termsAndConditions = termsAndConditions ? termsAndConditions : company.termsAndConditions;
      company.privacyPolicy = privacyPolicy ? privacyPolicy : company.privacyPolicy;
      company.address = address ? address : company.address;
  
      const updatedCompany = await company.save();
      res.status(200).json(updatedCompany);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  const createCompany = async (req, res) => {
    const { email,phone, socialLinks,splashScreen,address,icon,termsAndConditions,privacyPolicy} = req.body;

    try {
        const company = new Company({
          email,
          phone,
          socialLinks,
          splashScreen,
          address,
          icon,
          termsAndConditions,
          privacyPolicy
        });

        const newCompany = await company.save();
        res.status(201).json(newCompany);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  }

  const deleteCompany = async (req, res) => {
    try {
      const company = await Company.findById(req.params.id);
      if (!company) {
          return res.status(404).json({ message: 'Company not found' });
      }

      await company.remove();
      res.status(200).json({ message: 'Company deleted successfully' });
  } catch (err) {
      res.status(500).json({
          message: err.message
      });
  }
  }

  module.exports = {
    getCompany,
    updateCompany,
    createCompany,
    deleteCompany
  }