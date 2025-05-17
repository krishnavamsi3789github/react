export const addTask = (newTask) => {
  return { type: 'ADD' , payload: newTask};
};

export const deleteTask = (task) => {
  return { type: 'DELETE', payload: task };
};
 