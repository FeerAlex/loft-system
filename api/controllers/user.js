const mongoose = require('mongoose');

module.exports = {
  saveNewUser: (req, res) => {},

  login: (req, res) => {},

  authFromToken: (req, res) => {},

  updateUser: (req, res) => {
    const id = req.params.id;
  },

  deleteUser: (req, res) => {
    const id = req.params.id;
  },

  saveUserImage: (req, res) => {
    const id = req.params.id;
  },


  updateUserPermission: (req, res) => {
    const id = req.params.id;
  },

  getUsers: (req, res) => {}
}