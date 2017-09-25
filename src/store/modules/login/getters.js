export default {
  getLoginParams: state => {
    return {
      userName: state.userForm.userName,
      password: state.userForm.password
    }
  }
}
