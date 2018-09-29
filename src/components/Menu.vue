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