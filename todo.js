document.querySelector('#enter').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
<div class="task">
    <button class="btn btn-danger delete"><span class="glyphicon glyphicon-remove-sign"></button>          
    ${document.querySelector('#newtask input').value}
    <button class="btn btn-success complete"><span class="glyphicon glyphicon-check"></button>   

</div>`;

        //when task is deleted
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }



        //when task is completed
        var current_tasks = document.querySelectorAll(".complete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
                document.querySelector('#completedTask').innerHTML += `
        <div class="completedTask">
                ${document.querySelector('#newtask input').value}                          
                <button class="btn btn-danger delete"><span class="glyphicon glyphicon-remove-circle"></button>`;

                var current_tasks = document.querySelectorAll(".delete");
                for (var i = 0; i < current_tasks.length; i++) {
                    current_tasks[i].onclick = function () {
                        this.parentNode.remove();
                    }
                }
            }
        }

    }
}