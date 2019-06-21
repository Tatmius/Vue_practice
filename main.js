
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
