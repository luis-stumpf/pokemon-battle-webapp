<script lang="ts">
    import {io} from "$lib/webSocketConnection";

    let usernameAlreadySelected = false;
    let username;

    function onUsernameSelection(username) {
        usernameAlreadySelected = true;
        io.auth = { username };
        io.connect()
    }

    io.on('connect_error', (err) => {
        if (err.message === "invalid username") {
            usernameAlreadySelected = false;
        }
    })

</script>

<div class="flex items-center justify-center h-screen">
    <form class="flex flex-col space-y-4" on:submit={onUsernameSelection}>
        <input class="input variant-filled h-12 text-center" bind:value={username} type="text"/>
        <button class="btn variant-filled" type="submit">Login</button>
    </form>
</div>