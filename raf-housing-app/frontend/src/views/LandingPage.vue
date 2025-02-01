<template>
    <div class="landing-page">
        <h1>Welcome to Raf Housing, where we house them rafs</h1>
        <p>This is the landing page :).</p>

        <leaderboard-summary />
        <task-list/>
        <parent-component/>
        <RafRamenMenu/>
    </div>
</template>

<script>
    import LeaderboardSummary from '../components/LeaderboardSummary.vue'
    import TaskList from '../components/TaskList.vue'
    import ParentComponent from '../components/ParentComponent.vue';
    import RafRamenMenu from '../components/RafRamenMenu.vue';
    export default {
        name: 'LandingPage',    
        components: {
            LeaderboardSummary,
            TaskList,
            ParentComponent,
            RafRamenMenu

        }
    }
</script>

<style scoped>
    .landing-page {
        text-align: center;
        margin-top: 20px;
    }
</style>