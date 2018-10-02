<template>
	<div class="sidebar">
		<ul class="ini menu vertical">
			<li>
				<a class="openCollapse">
					Elements
				</a>
				<ul class="collapse">
					<li><router-link to="/documentation/elements/button">Button</router-link></li>
					<li><router-link to="/documentation/elements/modal">Modal</router-link></li>
					<li><router-link to="/documentation/elements/table">Table</router-link></li>
					<li><router-link to="/documentation/elements/navbar">Navbar</router-link></li>
					<li><router-link to="/documentation/elements/image">Image</router-link></li>
					<li><router-link to="/documentation/elements/card">Card</router-link></li>
					<li><router-link to="/documentation/elements/menu">Menu</router-link></li>
				</ul>
			</li>
			<li>
				<a class="openCollapse">
					Form
				</a>
				<ul class="collapse">
					<li><router-link to="/documentation/form/input">Input</router-link></li>
				</ul>
			</li>
			<li>
				<a class="openCollapse">
					Grids
				</a>
				<ul class="collapse">
					<li><router-link to="/documentation/grids/flexible">Flexible</router-link></li>
					<li><router-link to="/documentation/grids/size">Size</router-link></li>
					<li><router-link to="/documentation/grids/responsive">Responsive</router-link></li>
				</ul>
			</li>
			<li>
				<a class="openCollapse">
					Layout
				</a>
				<ul class="collapse">
					<li><router-link to="/documentation/layout/container">Container</router-link></li>
				</ul>
			</li>
		</ul>
	</div>
</template>