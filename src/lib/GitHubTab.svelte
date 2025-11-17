<script>
	import PanelButton from './PanelButton.svelte';
	import GitHubStarCount from 'labs/packages/astro-theme/components/nav/GitHubStarCount.svelte'
</script>

<h1 class="text-lg font-bold">GitHub</h1>
<PanelButton buttonImage="assets/github-mark-white.svg" clickUrl="https://github.com/LeSofanthiel/alpinex11" buttonText="GitHub repo">
	<i class='fas fa-star fa-xs ml-auto'></i>
	<span class="ml-1"><GitHubStarCount repo="LeSofanthiel/alpinex11"/></span>
</PanelButton>
<p>Like WebVM? <a class="underline" href="https://github.com/LeSofanthiel/alpinex11" target="_blank">Give us a star!</a></p>
<p>WebVM is FOSS, you can fork it to build your own version and begin working on your CheerpX-based project</p>
