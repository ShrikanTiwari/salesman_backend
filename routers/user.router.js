const router = require("express").Router();
const UserController = require("../controller/user.controller");
const upload = require('../middleware/upload');

router.post('/registration', upload.single('avatar'), UserController.register);

router.post('/location', UserController.addLocation);
router.post('/stock', UserController.addStock); // New route for adding location
router.get('/stocks', UserController.getAllStocks);
router.put('/update/:id', UserController.updateStock);
router.delete('/:id', UserController.deleteStock);
module.exports = router;
 