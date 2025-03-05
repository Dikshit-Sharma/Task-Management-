$(document).ready(function () {

    $('#addTaskBtn').click(function () {
        let task = $('#taskInput').val();
        if (task === '') {
            alert('Please enter a task!');
        } else {
            $('#taskList').append(`
                <li>
                    <span class="task">${task}</span>
                    <button class="completeBtn btn btn-primary" >Complete</button>
                    <button class="deleteBtn btn btn-primary">Delete</button>
                    <button id="editTaskBtn" class="btn btn-primary">Edit Task</button>
                </li><br>
            `);
            $('#taskInput').val('');
        }
    });


    $('#taskList').on('click', '.completeBtn', function () {
        $(this).siblings('.task').css("text-decoration", "line-through");
    });

});


$('#taskList').on('click', '.deleteBtn', function () {
    $(this).parent().animate({
        marginLeft: "200px",
        opacity: "0"
    }, 1000, function () {
        $(this).remove();
        $(this).slidUp(500);
    });
});


$('#toggleTasksBtn').click(function () {
    $('#taskList').toggle();
});

$('#taskList').on('click', '#editTaskBtn', function () {
    const newTask = prompt('Edit your task:');
    if (newTask !== null) {
        $(this).siblings('.task').text(newTask);

    }
});
