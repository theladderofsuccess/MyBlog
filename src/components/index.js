module.exports = {
    //主视图
    FrontPage: resolve => require(["./main/FrontPage.vue"], resolve),
    NotFound: resolve => require(["./main/404.vue"], resolve),
    //子视图
    TechStack: resolve => require(["./Pages/TechStack.vue"], resolve),
    ToolBar: resolve => require(["./Pages/ToolBar.vue"], resolve),
    Items: resolve => require(["./Pages/Items.vue"], resolve),
    Mood: resolve => require(["./Pages/Mood.vue"], resolve),
}