export const INCREMENT = "INCREMENT";
export const INCREMENTBYVALUE = "INCREMENTBYVALUE";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const decrementByValue = (data) => ({
  type: INCREMENTBYVALUE,
  payload: data,
});
export const reset = () => ({ type: RESET });
