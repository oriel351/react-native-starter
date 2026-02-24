let guestState = true;

export const authStore = {
  get isGuest() {
    return guestState;
  },
  setGuest() {
    guestState = true;
  },
  setLoggedIn() {
    guestState = false;
  },
};
