const UserService = require ('../services/user.services');
const UserModel = require('../model/user.model');
const LocationModel = require('../model/location.model');
const StockModel = require('../model/stock.model');

exports.register = async (req, res, next) => {
  try {
    const { latitude, longitude, otherPurpose, distributor } = req.body;

    let avatar = null;
    // Check if image file is included in the request 
    if (req.file) {
      avatar = req.file.path; // Path to the uploaded image
    }

    const successRes = await UserService.registerUser(latitude, longitude, otherPurpose, distributor, avatar);

    res.json({ status: true, success: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message });
  }
}

exports.addLocation = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.body;

    await UserService.addLocation(latitude, longitude);

    res.json({ status: true, success: 'Location added successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message });
  }
}

exports.addStock = async (req, res, next) => {
  try {
    const { sno,item, quantity } = req.body;

    await UserService.addStock(sno,item, quantity);

    res.json({ status: true, success: 'stock added successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message });
  }
}


exports.getAllStocks = async (req, res, next) => {
  try {
    const stocks = await StockModel.find(); // Retrieve all stocks from the database
    res.json({ status: true, data: stocks }); // Return the retrieved stocks as JSON response
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
};

exports.updateStock = async (req, res, next) => {
  try {
    const { itemId, quantity } = req.body;

    // Check if the itemId and quantity are provided
    if (!itemId || !quantity || quantity <= 0) {
      throw new Error('Invalid request');
    }

    // Call the service function to update stock
    await UserService.updateStock(itemId, quantity);

    res.json({ status: true, success: 'Stock updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message });
  }
};

exports.deleteStock = async (req, res, next) => {
  try {
      const itemId = req.params.id;
      await UserService.deleteStock(itemId);
      res.json({ status: true, success: 'Stock item deleted successfully' });
  } catch (error) {
      console.log(error);
      res.status(400).json({ status: false, error: error.message });
  }
};
