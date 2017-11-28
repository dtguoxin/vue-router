var router=new VueRouter({
    linkActiveClass:"checked",
    routes:[
        {path:"/",component:Home},
        {
            path:"/info",
            component:Info,
            children:[
                {path:"",component:List},
                {path:"/info/:id",component:Con},
            ]
        },
        {
            path:"/doc",
            component:Doc,
            children:[
                {path:"",components:{left:Left,right:Right}}
            ]
        },
        {path:"/login",component:login},
        {path:"*",redirect:"/"},

    ]
});