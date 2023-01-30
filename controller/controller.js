const User=require("../model/user");


exports.createUser = async (req, res) => {
    const data = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
  
    try {
const user = await User.create({
...req.body
      })
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
exports.getAllUsers = async (req, res) => {
    try {
      const data = await User.find();
      res.send(data);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };  
exports.getUsers=  async (req, res) => {
    try {
      const data = await User.findById(req.params.id);
      res.send(data);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };


  exports.patchUsers= async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };
  
      const result = await User.findByIdAndUpdate(id, updatedData, options);
  
      res.send(result);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
  
