import express from 'express';

const router = express.Router();

const users = [];

const id = 0;

router.get('/users', (req, res) => res.json({ users }));

router.get('/users/:id', (req, res) => {
  const user = users.find(val => val.id === Number(req.params.id));
  return res.json({ user });
});

router.post('/users', (req, res) => {
  const date = new Date();
  users.push({
    id: +id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    othername: req.body.othername,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    registered: `${date.getFullYear()} - ${date.getMonth()} - ${date.getDay()}`,
    admin: req.body.admin
  });
  return res.json({ message: 'Created' });
});

router.patch('/user', (req, res) => {
  const user = users.find(val => val.id === Number(req.params.id));
  user.firstname = req.body.firstname;
  return res.json({ message: 'Updated' });
});

router.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(val => val.id === Number(req.params.id));
  users.splice(userIndex, 1);
  return res.json({ message: 'User was successfully deleted' });
});

export default router;
