const { User } = require('../model')

class UserService {
  constructor() {

  }

  async getUsetList() {
    return await User.find({});
  }

  async addUser(user) {
    return await User.create(user);
  }

  async deleteUserById(id) {
    return await User.deleteOne({ id });
  }

  async updateUserById(id) {
     
  }

  async getUserDetail(id) {
    return await User.findById(id).exec();
  }
}

module.exports = new UserService();
