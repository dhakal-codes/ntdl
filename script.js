let taskList = [];

const handleOnSubmit = (event) => {
  const newForm = new FormData(event);
  const task = newForm.get("task");
  const hr = newForm.get("hr");

  const object = {
    task,
    hr,
    id: generateUniqueId(),
    type: "entry",
  };

  taskList.push(object);
  displayEntryList();
  displayBadList();
};

const displayEntryList = () => {
  let str = "";
  console.log(taskList);

  const entryElm = document.getElementById("entryList");
  const entryList = taskList.filter((item) => item.type === "entry");

  entryList.map((item, index) => {
    str += ` <tr>
                  <th>${index + 1}</th>
                  <td>${item.task}</td>
                  <td>${item.hr}hr</td>
                  <td class="text-end">
                    <button onclick="handleonDelete('${
                      item.id
                    }')"class="btn btn-danger">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button onclick="switchTask('${
                      item.id
                    }','bad')"class="btn btn-success">
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>`;
  });
  entryElm.innerHTML = str;
};

// bad list

const displayBadList = () => {
  let str = "";
  console.log(taskList);

  const badElm = document.getElementById("badList");
  const badList = taskList.filter((item) => item.type === "bad");

  badList.map((item, index) => {
    str += ` <tr>
                  <th>${index + 1}</th>
                  <td>${item.task}</td>
                  <td>${item.hr}hr</td>
                  <td class="text-end">
                  <button onclick="switchTask('${
                    item.id
                  }', 'entry')" class="btn btn-warning">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onclick="handleonDelete('${
                      item.id
                    }')"class="btn btn-danger">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    
                  </td>
                </tr>`;
  });
  badElm.innerHTML = str;
};
// creating unique ids for each task item

const generateUniqueId = (length = 10) => {
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    id += str[randomIndex];
  }
  return id;
};

// deleting task item from the list

const handleonDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this task?")) {
    taskList = taskList.filter((item) => item.id !== id);
    displayEntryList();
    displayBadList();
  }
};

// switching task between entry list and bad list

const switchTask = (id, type) => {
  taskList = taskList.map((item) => {
    if (item.id === id) {
      item.type = type;
    }
    return item;
  });
  displayEntryList();
  displayBadList();
};
