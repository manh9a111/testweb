const users = [
    { username: 'admin', password: '123456' }, // Người dùng giả định
  ];
  
  exports.findUser = (username) => users.find(user => user.username === username);
  