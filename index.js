document.addEventListener("DOMContentLoaded", function () {

    const scoreDisplay = document.getElementById("score");
    const lvlDisplay = document.getElementById("level");
    const grid = document.querySelector('.grid');
    const width = 28;
    let score = 0;
    let level = 1


    // 0 - puntitos
    // 1 - muro
    // 2 - pac-man
    // 3 - poder
    // 4 - vacio

    const layout1 = [
        1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 4, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 4, 4, 1, 3, 1, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 4, 4, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 3, 1, 4, 4, 1, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 1, 0, 1, 4, 1, 0, 1, 4,
        1, 0, 1, 4, 4, 1, 0, 1, 1, 0, 1, 0, 1, 4, 4, 4, 4, 4, 1, 0, 1, 0, 1, 4, 1, 0, 1, 4,
        1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 3, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 4, 4, 4, 4, 4,
        4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 1, 1, 4, 4, 1, 1, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 4, 4, 4, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 0, 0, 0, 0, 0, 0, 1, 4, 1, 0, 4, 4, 4, 4, 4, 4, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 4, 4, 4, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 1, 1, 4, 4, 1, 1, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4,
        4, 4, 4, 4, 4, 1, 0, 1, 1, 1, 0, 0, 0, 4, 4, 0, 0, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 3, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 3, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4, 4, 4, 4, 1, 1, 0, 1, 1, 0, 1, 0, 1, 4, 4, 4,
        1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 1, 0, 1, 4, 4, 4,
        4, 4, 1, 0, 1, 4, 4, 4, 1, 0, 1, 4, 4, 4, 4, 4, 4, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 4, 4, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 4, 1, 0, 1, 0, 1, 4, 4, 1, 0, 1, 3, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 1, 0, 0, 0, 1, 4, 4, 1, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 4, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1]


    const layout2 = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1,
        1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        4, 0, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 4,
        1, 0, 1, 1, 0, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
        1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 3, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    const layout3 = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 4, 4, 4, 4, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 2, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        4, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 4,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 4, 4, 4, 4, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]







    const cuadrados = [];

    function createboard1(layout1) {
        for (let i = 0; i < layout1.length; i++) {
            const cuadro = document.createElement('div');
            cuadro.id = i;
            grid.appendChild(cuadro);
            cuadrados.push(cuadro);




            if (layout1[i] === 0) {
                cuadrados[i].classList.add('puntitos')
            }
            if (layout1[i] === 1) {
                cuadrados[i].classList.add('muro')
            }
            if (layout1[i] === 2) {
                cuadrados[i].classList.add('pac-man')
            }
            if (layout1[i] === 3) {
                cuadrados[i].classList.add('poder')
            }
            if (layout1[i] === 4) {
                cuadrados[i].classList.add('vacio')
            }
        }

    }






    createboard1(layout1);
    lvlDisplay.innerHTML = level;



    console.log(cuadrados)
    //crear pac-man
    let pacmanIndex = 462;
    cuadrados[pacmanIndex].classList.add('pac-man')

    function movePacman(tecla) {
        cuadrados[pacmanIndex].classList.remove('pac-man')
        if (tecla.key === 'ArrowUp' && !cuadrados[pacmanIndex - width].classList.contains('muro')) {
            pacmanIndex -= width
            if (pacmanIndex == 11) {
                pacmanIndex = 767
            }
        }
        if (tecla.key === 'ArrowDown' && !cuadrados[pacmanIndex + width].classList.contains('muro')) {
            pacmanIndex += width
            if (pacmanIndex == 767) {
                pacmanIndex = 11
            }
        }
        if (tecla.key === 'ArrowLeft' && !cuadrados[pacmanIndex - 1].classList.contains('muro')) {
            pacmanIndex -= 1
            if (pacmanIndex == 364) {
                pacmanIndex = 391
            }
        }
        if (tecla.key === 'ArrowRight' && !cuadrados[pacmanIndex + 1].classList.contains('muro')) {
            pacmanIndex += 1
            if (pacmanIndex == 391) {
                pacmanIndex = 364
            }
        }

        cuadrados[pacmanIndex].classList.add('pac-man')


        comerpoder();
        comerpunto();
        //gameover();
        win();
        win2();
        win3();



        function comerpunto() {
            if (cuadrados[pacmanIndex].classList.contains('puntitos')) {
                score++;
                scoreDisplay.innerHTML = score
                cuadrados[pacmanIndex].classList.remove('puntitos')
            }
        }

        function comerpoder() {
            if (cuadrados[pacmanIndex].classList.contains('poder')) {
                score += 10;
                scoreDisplay.innerHTML = score;

                fantasmitos.forEach(ghost => ghost.asustat = true);
                setTimeout(relax, 10000);

                cuadrados[pacmanIndex].classList.remove('poder');
            }
        }
    }
    function relax() {
        fantasmitos.forEach(ghost => ghost.asustat = false)
    }


    class Ghost {
        constructor(className, startIndex, vel) {
            this.className = className;
            this.startIndex = startIndex;
            this.vel = vel;
            this.ghostIndex = startIndex;
            this.asustat = false;
            this.timerId = NaN
        }
    }

    fantasmitos = [
        new Ghost('fan1', 348, 250),
        new Ghost('fan2', 351, 500),
        new Ghost('fan3', 404, 150),
        new Ghost('fan4', 407, 250)
    ]
    console.log(fantasmitos)

    fantasmitos.forEach(ghost => {
        cuadrados[ghost.ghostIndex].classList.add(ghost.className,)
        cuadrados[ghost.ghostIndex].classList.add('ghost')
    })

    fantasmitos.forEach(ghost => moveGhost(ghost));

    function moveGhost(ghost) {
        console.log(ghost);
        const directions = [-1, 1, width, -width];

        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function () {

            if (!cuadrados[ghost.ghostIndex + direction].classList.contains('muro')
                && !cuadrados[ghost.ghostIndex + direction].classList.contains('ghost')) {

                cuadrados[ghost.ghostIndex].classList.remove(ghost.className, 'ghost', 'fasustado');
                ghost.ghostIndex += direction;
                cuadrados[ghost.ghostIndex].classList.add(ghost.className, 'ghost');

            } else {
                direction = directions[Math.floor(Math.random() * directions.length)]
            }

            if (ghost.asustat) {
                cuadrados[ghost.ghostIndex].classList.add('fasustado');
                //baixar vel
            }

            if (ghost.asustat && cuadrados[ghost.ghostIndex].classList.contains('pac-man')) {
                cuadrados[ghost.ghostIndex].classList.remove('fasustado', 'ghost', ghost.className);
                ghost.ghostIndex = ghost.startIndex;
                ghost.asustat = false;
                //score += 100;
                //scoreDisplay.innerHTML = score;
                cuadrados[ghost.ghostIndex].classList.add('ghost', ghost.className);
            }
            gameOver();
        }, ghost.vel)



    }









    document.addEventListener('keyup', movePacman);



    function win() {
        if (score == 1 && level == 1) {
            fantasmitos.forEach(f => clearInterval(f.timerId))
            //document.removeEventListener('keyup', movePacman)
            setTimeout(function () {
                alert("has ganado")
                cuadrados.forEach(c => {
                    c.classList = ''
                })
                for (let g = 0; g < layout2.length; g++) {
                    const cuadro = document.createElement('div');
                    cuadro.id = g;
                    grid.appendChild(cuadro);
                    cuadrados.push(cuadro);
                    if (layout2[g] === 1) {
                        cuadrados[g].classList.add('muro2')
                    }
                }
                createboard1(layout2)
                pacmanIndex = 517
                fantasmitos.forEach(ghost => moveGhost(ghost));
                fantasmitos.forEach(ghost => {
                    cuadrados[ghost.ghostIndex].classList.add(ghost.className,)
                    cuadrados[ghost.ghostIndex].classList.add('ghost')
                    level = 2
                    lvlDisplay.innerHTML = level
                })
            }, 30)
        }
    }

    function win2() {
        if (score == 2 && level == 2) {
            fantasmitos.forEach(f => clearInterval(f.timerId))
            //document.removeEventListener('keyup', movePacman)
            setTimeout(function () {
                alert("has ganado")
                cuadrados.forEach(c => {
                    c.classList = ''
                })
                for (let g = 0; g < layout3.length; g++) {
                    const cuadro = document.createElement('div');
                    cuadro.id = g;
                    grid.appendChild(cuadro);
                    cuadrados.push(cuadro);
                    if (layout3[g] === 1) {
                        cuadrados[g].classList.add('muro3')
                    }
                }
                createboard1(layout3)
                pacmanIndex = 517
                fantasmitos.forEach(ghost => moveGhost(ghost));
                fantasmitos.forEach(ghost => {
                    cuadrados[ghost.ghostIndex].classList.add(ghost.className,)
                    cuadrados[ghost.ghostIndex].classList.add('ghost')
                    level = 3
                    lvlDisplay.innerHTML = level
                })
            }, 30)
        }
    }
    function win3(){
        if (score == 10 && level == 3){
        fantasmitos.forEach(f => clearInterval(f.timerId))
        document.removeEventListener('keyup', movePacman)
        setTimeout(function () {
            cuadrados.forEach(c => {
                c.classList = ''
            })
            let imagen = document.createElement('img');
            imagen.src = "./imagenes/winwin.jfif";
            grid.appendChild(imagen);
        }, 30)
    }
}
     
    

    function gameover() {
        if (cuadrados[pacmanIndex].classList.contains('ghost')
            && !cuadrados[pacmanIndex].classList.contains('fasustado')) {
            fantasmitos.forEach(g => clearInterval(g.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(function () {
                alert('perdiste')


            }, 50)		
		}	
            
        }
    
    }
);
//modificaciones
/*game over -> reinicio todo
boton de reinicio*/
