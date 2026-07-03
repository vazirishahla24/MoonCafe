const categories = document.querySelectorAll('.category');


categories.forEach(category => {
    category.addEventListener('click', () => {
        const targetId = category.dataset.target;
        const menu = document.getElementById(targetId);

        document.querySelectorAll('.expertise').forEach(item => {
            item.style.display = 'none';
        });


        categories.forEach(item => {
            item.classList.remove('active');
        })

        menu.style.display = 'grid';
        // menu.style.display = 'flex';

        category.classList.add('active');
    });
})


fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        const hotList = document.getElementById("hot");
        data.hot.forEach(element => {

            console.log(element.src);

            hotList.innerHTML += `

                <div class="expertise-box d-flex align-center">
                    <img src="./images/menu/hot/${element.src}">

                    <div class="expertise-box-title d-flex align-center ">
                        <h4>${element.price}</h4>
                        <h3>${element.persianName}</h3>
                    </div>

                    <a class="button-style">${element.name}</a>

                    <p>${element.tarkib}</p>
                </div>            
            `

        });
    });



fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        const coldList = document.getElementById("cold");
        data.cold.forEach(element => {

            console.log(element.src);

            coldList.innerHTML += `

                <div class="expertise-box d-flex align-center">
                    <img src="./images/menu/cold/${element.src}">

                    <div class="expertise-box-title d-flex align-center ">
                        <h4>${element.price}</h4>
                        <h3>${element.persianName}</h3>
                    </div>

                    <a class="button-style">${element.name}</a>

                    <p>${element.tarkib}</p>
                </div>            
            `

        });
    });


fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        const cakeList = document.getElementById("cake");
        data.cake.forEach(element => {

            console.log(element.src);

            cakeList.innerHTML += `

                <div class="expertise-box d-flex align-center">
                    <img src="./images/menu/hot/${element.src}">

                    <div class="expertise-box-title d-flex align-center ">
                        <h4>${element.price}</h4>
                        <h3>${element.persianName}</h3>
                    </div>

                    <a class="button-style">${element.name}</a>

                    <p>${element.tarkib}</p>
                </div>            
            `

        });
    });


fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        const breakfastList = document.getElementById("breakfast");
        data.breakfast.forEach(element => {

            console.log(element.src);

            breakfastList.innerHTML += `

                <div class="expertise-box d-flex align-center">
                    <img src="./images/menu/bf/${element.src}">

                    <div class="expertise-box-title">
                        <h3>${element.persianName}</h3>
                    </div>

                    <a class="button-style">${element.name}</a>

                </div>            
            `

        });
    });


fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        const teaList = document.getElementById("tea");
        data.tea.forEach(element => {

            console.log(element.src);

            teaList.innerHTML += `

                <div class="expertise-box d-flex align-center">
                    <img src="./images/menu/tea/${element.src}">

                    <div class="expertise-box-title d-flex align-center ">
                        <h4>${element.price}</h4>
                        <h3>${element.persianName}</h3>
                    </div>

                    <a class="button-style">${element.name}</a>

                    <p>${element.tarkib}</p>
                </div>            
            `

        });
    });


fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        const shakeList = document.getElementById("shake");
        data.shake.forEach(element => {

            console.log(element.src);

            shakeList.innerHTML += `

                <div class="expertise-box d-flex align-center">
                    <img src="./images/menu/shake/${element.src}">

                    <div class="expertise-box-title d-flex align-center ">
                        <h4>${element.price}</h4>
                        <h3>${element.persianName}</h3>
                    </div>

                    <a class="button-style">${element.name}</a>

                </div>            
            `

        });
    });
