let taskList = [];

const handleOnSubmit = (event) => {
  const newForm = new FormData(event);
  const task = newForm.get("task");
  const hr = newForm.get("hr");

  const object = { task, hr };

  taskList.push(object);
  console.log(taskList);
};
