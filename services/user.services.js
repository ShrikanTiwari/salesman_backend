const UserModel = require("../model/user.model");
const  LocationModel  = require('../model/location.model'); // Import LocationModel correctly
const StockModel = require('../model/stock.model');
class UserService {
    static async registerUser(latitude, longitude, otherPurpose,  distributor, avatar) {
        try {
            const createUser = new UserModel({ latitude, longitude, otherPurpose,  distributor, avatar });
            return await createUser.save();
        } catch(error) {
            throw error;
        }
    }

    static async addLocation(latitude, longitude) {
        try {
            return await LocationModel.create({ latitude, longitude });
        } catch(error) {
            throw error;
        }
    } 

    static async addStock(sno,item, quantity) {
        try {
            return await StockModel.create({ sno,item, quantity });
        } catch(error) {
            throw error;
        }
    } 

    static async updateStock(itemId, quantity) {
        try {
            // Find the stock item by its ID
            const stock = await StockModel.findById(itemId);

            // If the stock item doesn't exist, throw an error
            if (!stock) {
                throw new Error('Stock item not found');
            }

            // Update the quantity
            stock.quantity = quantity;

            // Save the updated stock item
            return await stock.save();
        } catch(error) {
            throw error;
        }
    } 

    static async deleteStock(itemId) {
        try {
            // Find the stock item by its ID and delete it
            await StockModel.findByIdAndDelete(itemId);
        } catch(error) {
            throw error;
        }
    }



}

module.exports = UserService;
