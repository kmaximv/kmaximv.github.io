var menuData = {
	data:{
	  config:{
			data: [],
	  },
	}
};


axios.get('./menu.json')
	.then(function (response) {
			menuData.data = response.data.data;
			appHeader.header = response.data.data.header;
	})
	.catch(function (error) {
			console.log(error);
	});


Vue.component('menu-list', {
	template: `
	<li class='dropdown'>
		<a class='dropdown-toggle' data-toggle='dropdown' href='#'>
			<span :class='data.icon'></span> {{ data.title }}<span class='caret'></span>
		</a>
		<ul class='dropdown-menu'>
			<menu-string
				v-for="item in data.data"
				:key="item.id"
				:icon="item.icon"
				:link='item.link'>
				{{ item.name }}
			</menu-string>
		</ul>
	</li>
		`,
	props: ['data'],
});


Vue.component('menu-string', {
	template: `<li><a :href='link'><span :class='icon'></span><slot></slot></a></li>`,
	props: ['link', 'icon']
});


Vue.component('app-body', {
	template: `
	<div class="col-sm-5 col-md-4 col-lg-3">
			<h3>Reboot ESP</h3>
			<div class="alert alert-info" role="alert"><a href="#" class="alert-link">Rebooting...</a></div>
	</div>
	`
});


var appMenu = new Vue({
	el: "#app-menu",
	data: menuData
});

var appMenuFooter = new Vue({
	el: "#app-menu-footer",
	data: menuData
});

var appHeader = new Vue({
	el: "#app-header",
	data: {
		header: ""
	}
});

var app = new Vue({
	el: "#app",
	data: menuData
});
