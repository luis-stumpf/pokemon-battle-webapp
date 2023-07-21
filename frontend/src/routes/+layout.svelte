<script>
    // Your selected Skeleton theme:
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/skeleton.css';

    // Finally, your application's global stylesheet (sometimes labeled 'app.css')
    import '../app.postcss';
    import {AppShell} from "@skeletonlabs/skeleton";
    import Header from "$lib/components/Header.svelte";
</script>

<AppShell>
    <svelte:fragment slot="header">
        <Header></Header>
    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
    <slot />
</AppShell>