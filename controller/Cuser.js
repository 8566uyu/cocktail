// TODO: 컨트롤러 코드

const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  User.post_signup(req.body, () => {
    res.send(true);
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = (req, res) => {
  User.post_signin(req.body, (result) => {
    console.log(result)
    if (!result) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
};

// exports.post_profile = (req, res) => {
//   res.render("post_profile");
// };

// exports.post_profile = (req, res) => {
//   User.post_profile(req.body.userid, (result) => {
//     if (result.length > 0) {
//       res.render("profile", { data: result[0] });
//     } else {
//       res.redirect("/user/signin");
//     }
//   });
// };

// exports.edit_profile = (req, res) => {
//   User.edit_profile(req.body, () => {
//     res.send("수정되었습니다~");
//   });
// };
//
// exports.delete_profile = (req, res) => {
//   User.delete_profile(req.body, () => {
//     res.send("탈퇴되었습니다~");
//   });
// };
