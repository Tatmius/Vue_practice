
var app = new Vue({
    el: '#app',
	data: {
		message: {
			value:'Default message',
		},
		list: ['apple','banana','melon'],
		count:0,
		num:1,
		show:true,
		scroll:0,
		classObject:{
			child: true,
			'is-active':false,	
		},
		styleObject:{
			color: 'red',
			backgroundColor: 'lightgray',	
		},
		radius:50,
		ok: true,
		list1:[
			{id:1, name:'slime', hp:100},
			{id:2, name:'goblin',hp:200},
			{id:3, name:'dragon',hp:500},
		],
    	},
	methods:{
		handleClick:function(event){
			alert(event.target)
		},
		increment: function(){
			this.count+=1
		},
	},
	mounted:function(){
		this.scroll=100
		},


})	

