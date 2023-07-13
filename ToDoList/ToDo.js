let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {}

function toggleTask (taskId) {
    const Task = tasks.filter(function(task){
        return task.id == taskId
    });
    if (task.length >0){
        const currentTask = task([0]);
        currentTask.done =  !currentTask.done;
        renderList();
        showNotification('task toggld succcesfully')


    }
    showNotification('could not toggle the task')


}

function deleteTask (taskId) {
    const newTask = tasks.filter(function(task){
        return task.id !== taskId
    })
    tasks = newTask;
    renderList();
    showNotification('Task deleted successfully')


}

function addTask (task) {
    if(task){
    renderList();
    showNotification('task added successfully');
    return;
    }
    showNotification('task cannot be added')

function showNotification(text) {
    alert(text);
}

function handleInputKeys(e){
    if(e.key === 'Enter'){
        const text = e.target.value;

    if(!text){
        showNotification('Task Text  cannot be Empty')
        return;
    }
    const task = {
        task,
        id :Date.now().tostring(),
        done:false

    }
    e.target.value ='';
    addTask(task);
    }
}
addTaskInput.addEventListener('keyup', handleInputKeys)