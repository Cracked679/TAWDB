
$(document).ready(function (){
    $.getJSON("/api/todos")
    .then(addTodos);

    $('#todoInput').keypress(function (event) { 
        if(event.which == 13){
            createTodo();
        }
    });

    $('.list').on('click','li',function(){
        alert("Clicked li element");
    });

    $('.list').on('click','span',function(event){
        event.stopPropagation();
        removeTodo($(this).parent());
    });
});

function addTodos(todos){
    todos.forEach(function(todo){
       addTodo(todo);
    });
}

function addTodo(todo){
    var newTodo =  $('<li class="task">'+ todo.name + '<span>X</span></li>');
    newTodo.data('id',todo._id);
    if(todo.completed){
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

//send req to create new todos
function createTodo(todo){
    var userInput = $('#todoInput').val();
    $.post('/api/todos',{name : userInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    });
}

function removeTodo(todo){
    var clickedId = todo.data('id');
    var deleteUrl = '/api/todos/' + clickedId;
    $(this).parent().remove();
    $.ajax({
        method: 'DELETE',
        url:deleteUrl
    }) 
    .then(function(data){
        todo.remove();
    })
    .catch(function(err){
        console.log(err);
    });
}