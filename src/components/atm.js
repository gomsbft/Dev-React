function atm(money, action) {
  switch(action.type) {
    case '입금':
      return money + action.price;
    case "출금":
      return money - action.price;
    default:
      return money
  }
}

export default atm;