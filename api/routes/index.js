const express = require('express');
const router  = express.Router();

const user    = require('../controllers/user');
const news    = require('../controllers/news');

router.get('*', (req, res) => {
  res.render('index');
});

// USER
router.post('/api/saveNewUser', user.saveNewUser);
router.post('/api/login', user.login);
router.post('/api/authFromToken', user.authFromToken);
router.put('/api/updateUser/:id', user.updateUser);
router.delete('/api/deleteUser/:id', user.deleteUser);
router.post('/api/saveUserImage/:id', user.saveUserImage);

router.get('/api/updateUserPermission/:id', user.updateUserPermission);
router.put('/api/getUsers', user.getUsers);

// NEWS
router.get('/api/getNews', news.getNews);
router.post('/api/newNews', news.newNews);
router.put('/api/updateNews/:id', news.updateNews);
router.delete('/api/deleteNews/:id', news.deleteNews);

module.exports = router;