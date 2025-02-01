<script>
    export default{
        name: 'childComponent',
        props:{
            someProp:{
                type: String,
                required: true
            }
        },
        methods:{
            sendToParent(){
                this.$emit('customEvent','Hello, Parent, Im your child!')
            }
        }
    }
</script>

<template>
    <div>
        <p>Child Received: {{ someProp }}</p>
        <button @click="sendToParent">Send Event to Parent</button>
    </div>
</template>

