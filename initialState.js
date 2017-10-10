const initialState = {
  Api_Keys: {
    keyInUse: "8m8bkcVYqxE5j0vQL2wk1bpiBGibgaqCrOvwZVyU",
    Keys: [
      {"8m8bkcVYqxE5j0vQL2wk1bpiBGibgaqCrOvwZVyU": {
        key: "8m8bkcVYqxE5j0vQL2wk1bpiBGibgaqCrOvwZVyU",
        inUse: false,
        exhausted: false
      }},
      {"a4q0jhngYKp9kn0cuwvKMHtKz7IrkKtFBRaiMv5t": {
        key: "a4q0jhngYKp9kn0cuwvKMHtKz7IrkKtFBRaiMv5t",
        inUse: false,
        exhausted: false
      }},
      {"ef0eRn0aLh0Byb8q7wCniHbiqcjfDWITSIJVh9xy": {
        key: "ef0eRn0aLh0Byb8q7wCniHbiqcjfDWITSIJVh9xy",
        inUse: false,
        exhausted: false
      }}
    ],
  },
  Mission_Manifest: {
    isFetching: false,
    Rovers: []
  },
  Cameras_Data: {
    isFetching: false,
    Rovers: []
  }
};

export default initialState;