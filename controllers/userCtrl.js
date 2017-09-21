var users = [
    {
      name: 'Preston McNeil',
      password: 'password1',
      friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
      name: 'Ryan Rasmussen',
      password: '$akgfl#',
      friends: ['Lindsey Mayer']
    },
    {
      name: 'Terri Ruff',
      password: 'hunter2',
      friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
      name: 'Lindsey Mayer',
      password: '777mittens777',
      friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
  ];

  module.exports = {
    login: function(req,res,next) {
        var results = users.filter(function(value){
          return (value.name === req.body.name && value .password === req.body.password);
        });
        if(results[0]){
          req.session.currentUser = results[0];
          res.json({userFound: true});
    } else {
        res.json({userFound: false});
    }
}
};