const github = new Github();
// Init the UI
const ui = new UI();

// Search input
const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup', (e) => {
  // Get Input Text
  const userText = e.target.value;
  if (userText !== '') {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile in the UI
        ui.showProfile(data.profile);
        ui.showrepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
