<template>
    <header>
        <h1>Default Layout Thingy</h1>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <hr>
    <div class="container">
        <slot />
    </div>
    <hr>
    <footer>
        <p>Le Footer</p>
    </footer>
</template>

<style scoped>
    hr {
        border: 3px solid light-dark(sandybrown, firebrick);
    }

    ul {
        display: flex;
        padding: .4em 1em;
        list-style: none;
        gap: 1em;

        >* {
            padding: .4em 1em;
            background-color: light-dark(#eee, #222);
        }
    }
</style>