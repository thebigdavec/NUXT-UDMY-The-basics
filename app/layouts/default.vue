<template>
    <header>
        <h1>Default Layout Thingy</h1>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <hr>
    <slot />
    <hr>
    <footer>
        <p>Le Footer</p>
    </footer>
</template>

<style scoped>
hr {
    border: 3px solid light-dark(sandybrown, firebrick);
}
</style>