function coffeeReducer(total, action) {
  switch(action.type) {
    case '아메리카노':
      return total + action.price;
    case "라떼":
      return total + action.price;
    case "모카":
      return total + action.price;
    default:
      return total
  }
}

export default coffeeReducer;