export const Increment = () => {
  return { type: 'INCREMENT' };
};

export const Decrement = () => {
  return { type: 'DECREMENT' };
};

export const AddName = (newname) => {
  return { type: 'NAMECHANGE', payload: newname}
} 