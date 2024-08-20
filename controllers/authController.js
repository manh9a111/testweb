const userModel = require('/Users/manh/Back_end/nodejs/models/models/userModel.js');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = userModel.findUser(username);

  if (user && user.password === password) {
    res.render('success', { username });
  } else {
    res.render('login', { error: 'Sai tên người dùng hoặc mật khẩu' });
  }
};

exports.showLoginPage = (req, res) => {
  res.render('login', { error: null });
};
