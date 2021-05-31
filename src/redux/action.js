// 增加
export const add = (age) => {
  return { type: 'ADD', data: age }
}

// 减少
export const subtract = (age) => {
  return { type: 'SUBTRACT', data: age }
}