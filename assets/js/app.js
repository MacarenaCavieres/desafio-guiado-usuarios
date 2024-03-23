// IIFE

const main = (() => {
    const result = document.querySelector("#result");

    async function private() {
        try {
            const response = await fetch("https://randomuser.me/api/?results=10");
            // const data = await response.json();
            // console.log(data);

            if (!response.ok) {
                throw new Error("No se puede completar la solicitud");
            }

            //destructuring
            const { results } = await response.json();

            results.forEach((user) => {
                console.log(user);
                const p = document.createElement("p");
                const img = document.createElement("img");
                result.appendChild(p);
                result.appendChild(img);
                p.textContent = `${user.name.first} ${user.name.last}/// ${user.email} /// ${user.cell}`;
                img.src = user.picture.medium;
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    return {
        getData() {
            private();
        },
    };
})();

main.getData();
