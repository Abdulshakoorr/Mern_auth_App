// create user
export const createUser = (req, res) => {
  res.status(201).json({
    message: "user created",
  });
};

// all users
export const allUsers = (req, res) => {
  res.status(200).json({
    message: "all users",
  });
};

// single user
export const singleUser = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `user id : ${id}`,
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `user updated id : ${id}`,
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: `user deleted id : ${id}`,
  });
};
