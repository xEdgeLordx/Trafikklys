allgray()
        function updateView(onclick, color1, color2, color3){
            app = document.getElementById('app');
            app.innerHTML = /*html*/ `
            <div class = "container"><div class = "trafikklys" onclick = "${onclick}()">
                ${CreateLight(color1)}
                ${CreateLight(color2)}
                ${CreateLight(color3)}
                </div></div>
            `;
        }
        function CreateLight(color){
            return /*html*/`<div class = "light" style = "background-color: ${color}"></div>`;
        }
        function allgray(){
            updateView('RedLight','gray','gray','gray');

        }
        function stop(){
            location.reload();
        }
        function RedLight(){
            LightActive = true;
            updateView('stop','red','gray','gray');
            setTimeout(redyellow, 2000)
        }
        function redyellow(){
            updateView('stop','red','yellow','gray');
            setTimeout(greenlight, 2000)
        }
        function greenlight(){
            updateView('stop', 'gray','gray','green')
            setTimeout(yellowtored, 2000)
        }
        function yellowtored(){
            updateView('stop', 'gray','yellow','gray')
            setTimeout(RedLight, 2000)
        }