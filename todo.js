document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#push').onclick = function(){
        var input = document.querySelector('#newtask input');
        if(input.value.length == 0){
            alert("Пожалуйста, введите задачу!");
        } else {
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${input.value}
                    </span>
                    <button class="delete">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" 
                                  stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            `;

            var current_tasks = document.querySelectorAll(".delete");
            for(var i = 0; i < current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
            
            input.value = "";
        }
    }
});