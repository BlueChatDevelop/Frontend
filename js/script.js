const user={
    login:false,
    signup:false
    };
console.log("User login"+` ${user.login}`);
console.log("User sign-up"+` ${user.signup}`);
function LoginTest() {
  user.login=true;
  console.log("User login"+` ${user.login}`);
  console.log("User sign-up"+` ${user.signup}`);
}
function SignUpTest() {
  user.signup=true;
  console.log("User login"+` ${user.login}`);
  console.log("User sign-up"+` ${user.signup}`);
}