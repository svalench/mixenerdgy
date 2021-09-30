<template>
<div>
  <header class="header">

		<!-- Top Bar -->

		<top_bar></top_bar>

		<!-- Header Main -->

		<head_main></head_main>

		<!-- Main Navigation -->

		<head_navigation></head_navigation>

		<!-- Menu -->

	<phoen_menu></phoen_menu>

	</header>
</div>
</template>

<script>
import Top_bar from "./top_bar";
import Head_main from "./head_main";
import Head_navigation from "./head_navigation";
import Phoen_menu from "./phoen_menu";
export default {
  name: "header_site",
  components: {Phoen_menu, Head_navigation, Head_main, Top_bar}
}
</script>

<style scoped>

</style>
