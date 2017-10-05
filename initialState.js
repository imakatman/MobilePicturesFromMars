const initialState = {
  Api_Keys: {
    indexOfKeyInUse: 0,
    Keys: [
      {
        key: "8m8bkcVYqxE5j0vQL2wk1bpiBGibgaqCrOvwZVyU",
        inUse: true,
        exhausted: false
      }, {
        key: "a4q0jhngYKp9kn0cuwvKMHtKz7IrkKtFBRaiMv5t",
        inUse: true,
        exhausted: false
      }, {
        key: "ef0eRn0aLh0Byb8q7wCniHbiqcjfDWITSIJVh9xy",
        inUse: true,
        exhausted: false
      }
    ],
  },
  Mission_Manifest: {
    isFetching: false,
  },
};

export default initialState;