
var app = new Vue({
    el: '#app',
	data: {
		message: {
			value:'Default message',
		},
		message1:'This is message1',
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
		name:"kimaira",
		list1:[
			{id:1, name:'slime', hp:100},
			{id:2, name:'goblin',hp:200},
			{id:3, name:'dragon',hp:500},
		],
		val:true,
		val1:[],
		val2:'',
		val3:[],
		val4:50,
	},
		
	methods:{
		handleClick:function(event){
			alert(event.target)
		},
		increment: function(){
			this.count+=1
		},
		doAdd:function(){
			var max=this.list1.reduce(function(a,b){
				return a>b.id ? a:b.id
			
			},0)
			this.list1.push({
				id:max+1,
				name:this.name,
				hp:500,
			})
		},
	},
	mounted:function(){
		this.scroll=100
	},


})	

