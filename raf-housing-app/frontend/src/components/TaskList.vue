<script>    
    export default{
        name: 'TaskList',
        data()
        {
            return{
                tasks:[],
                loading: true,
                errorMessage:''
            }
        },
        mounted()
        {
            setTimeout(()=>{
                const simulatorError = false
                if(simulatorError){
                    this.errorMessage = "Failed to load tasks";
                }
                else{
                    this.tasks = ['Eat Ramen', 'Player Satisfactory', 'Not sleep']
                }
                this.loading = false;
            }, 1000)
        }
    }
</script>

<template>
    <div>
        <h3>Task List</h3>
        <p v-if="loading">Loading task...</p>
        <p v-else-if="tasks.length ===0">No tasks found.</p>
        <ul v-else>
            <li v-for="(task, i) in tasks" :key="i">
                {{ task }}
            </li>

        </ul>
        <p v-if="errorMessage" class="error">Error: {{ errorMessage }}</p>
    </div>
</template>


<style>
</style>