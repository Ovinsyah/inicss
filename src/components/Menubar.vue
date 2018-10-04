<template>
	<div class="sidebar">
		<ul class="ini menu vertical">
			<li>
				<a class="openCollapse">
					Elements
				</a>
				<ul class="collapse">
					<li><router-link to="/documentation/elements/button">Button</router-link></li>
					<li><router-link to="/documentation/elements/dropdown">Dropdown</router-link></li>
					<li><router-link to="/documentation/elements/modal">Modal</router-link></li>
					<li><router-link to="/documentation/elements/table">Table</router-link></li>
					<li><router-link to="/documentation/elements/navbar">Navbar</router-link></li>
					<li><router-link to="/documentation/elements/image">Image</router-link></li>
					<li><router-link to="/documentation/elements/card">Card</router-link></li>
					<li><router-link to="/documentation/elements/tabs">Tabs</router-link></li>
				</ul>
			</li>
			<li>
				<a class="openCollapse">
					Form
				</a>
				<ul class="collapse">
					<li><router-link to="/documentation/form/general">General</router-link></li>
					<li><router-link to="/documentation/form/input">Input</router-link></li>
					<li><router-link to="/documentation/form/textarea">Textarea</router-link></li>
					<li><router-link to="/documentation/form/checkbox">Checkbox</router-link></li>
					<li><router-link to="/documentation/form/radio">Radio</router-link></li>
					<li><router-link to="/documentation/form/select">Select</router-link></li>
					<li><router-link to="/documentation/form/file">File</router-link></li>
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
			<li>
				<a class="openCollapse">
					Collection
				</a>
				<ul class="collapse">
					<li><router-link to="/documentation/collection/step">Step</router-link></li>
				</ul>
			</li>
		</ul>
	</div>
</template>