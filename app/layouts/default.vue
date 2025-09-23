<template>
    <div>
        <header>
            <h1>Header</h1>
            <!-- LINKS -->
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
        <hr/>
        <slot/>
    </div>
</template>