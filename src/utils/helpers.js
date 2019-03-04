const mapUsersIdsToUser = (idArr, users) => idArr.map((idArrItem) => {
  const obj = users.filter(user => user.id === idArrItem.userId)[0];
  return { ...idArrItem, user: obj };
});

export { mapUsersIdsToUser };
