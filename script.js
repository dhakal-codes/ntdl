let taskList = [];

const handleOnSubmit = (event) => {
  const newForm = new FormData(event);
  const task = newForm.get("task");
  const hr = newForm.get("hr");

  const object = { task, hr };

  taskList.push(object);
  displayEntryList();
};

const displayEntryList = () => {
  console.log(taskList);
  let str = "";

  const entryElm = document.getElementById("entryList");

  taskList.map((item, index) => {
    str += ` <tr>
                  <th>${index + 1}</th>
                  <td>${item.task}</td>
                  <td>${item.hr}hr</td>
                  <td class="text-end">
                    <button class="btn btn-danger">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="btn btn-success">
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>`;
  });
  entryElm.innerHTML = str;
};
