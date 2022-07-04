<template>
    <div id="squares-animation" class="wrapper">
        <div class="square first animate-first-top"></div>
        <div class="square second animate-first-bottom"></div>
        <div class="square third animate-first-top"></div>
        <div class="square fourth animate-first-bottom"></div>
        <div class="square fifth animate-first-top"></div>
    </div>
</template>

<style scoped>
:deep() {
    --wrapper-width: 5rem;
    --wrapper-height: 1rem;
    --square-width-percentage: 20%;
    --square-height-percentage: 100%;
}

#squares-animation.wrapper {
    position: relative;
    display: flex;
    width: var(--wrapper-width);
    height: var(--wrapper-height);
}

#squares-animation.wrapper > .square {
    position: relative;
    width: var(--square-width-percentage);
    height: var(--square-height-percentage);
}

#squares-animation.wrapper > .square.first {
    background-color: var(--first-color);
}

#squares-animation.wrapper > .square.second {
    background-color: var(--second-color);
}

#squares-animation.wrapper > .square.third {
    background-color: var(--fourth-color);
}

#squares-animation.wrapper > .square.fourth {
    background-color: var(--fifth-color);
}

#squares-animation.wrapper > .square.fifth {
    background-color: var(--seventh-color);
}

.animate-first-top {
    animation-name: first-top;
    animation-duration: 1.25s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

.animate-first-bottom {
    animation-name: first-bottom;
    animation-duration: 1.25s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes first-top {
    0% {
        bottom: var(--wrapper-height);
    }
    25% {
        bottom: 0;
    }
    50% {
        bottom: calc(var(--wrapper-height) * -1);
    }
    75% {
        bottom: 0;
    }
    100% {
        bottom: var(--wrapper-height);
    }
}

@keyframes first-bottom {
    0% {
        bottom: calc(var(--wrapper-height) * -1);
    }
    25% {
        bottom: 0;
    }
    50% {
        bottom: var(--wrapper-height);
    }
    75% {
        bottom: 0;
    }
    100% {
        bottom: calc(var(--wrapper-height) * -1);
    }
}
</style>
