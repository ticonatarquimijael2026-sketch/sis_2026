    function calcular(){
        let a = document.getElementById('a').value;
        let b = document.getElementById('b').value;
        let c = document.getElementById('c').value;
        let res = '';

        if(a != 0 && a !== ''){
            let dis = Math.pow(b,2) - (4 * a * c);
            if(dis < 0){
                res = '<h3 style="color:#ef4444">Discriminante no puede ser negativo (Sin solución real)</h3>';
            }
            else{
                let x1 = (-b + Math.sqrt(dis)) / (2 * a);
                let x2 = (-b - Math.sqrt(dis)) / (2 * a);
                res = 'x<sub>1</sub> = ' + x1 + '<br>x<sub>2</sub> = ' + x2;
            }
        }
        else{
            res = '<h3 style="color:#ef4444">El valor de "a" no puede ser 0 ni estar vacío</h3>';
        }
        document.getElementById('res').innerHTML = res;
    }

    function fact() {
        let n = document.getElementById('n').value;
        let f = 1;

        for (let i = 1; i <= n; i++) {
            f = f * i;
        }

        document.getElementById('rf').innerText = f;
    }



    function verificar() {
        let n = document.getElementById('n').value;
        let s = 0;
        let div = "";
        let suma = "";


        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                s = s + i;
                if (suma === "") {
                    suma = i;
                } else {
                    suma = suma + " + " + i;
                }
            }
        }


        let ult = s / 2; 
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                if (div === "") {
                    div = i;
                } else if (i === ult) {
                    div = div + " y " + i;
                } else {
                    div = div + ", " + i;
                }
            }
        }


        if (s == n && n > 0) {
            document.getElementById('res').innerText = n + " es un número perfecto porque sus divisores propios son " + div + "; y " + n + " = " + suma + ".";
        } else {
            document.getElementById('res').innerText = n + " NO es un número perfecto porque sus divisores suman " + s + ".";
        }
    }


    function generar() {
        let n = document.getElementById('n').value;
        document.getElementById('res').innerText = EsPrimo(n);
    }

    function EsPrimo(n) {
        let res = "";
        let contador = 0;
        
        for (let i = 2; contador < n; i++) {
            let esPrimo = true;
            for (let j = 2; j * j <= i; j++) {
                if (i % j === 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {
                res += i + ', ';
                contador++;
            }
        }
        return res;
    }

    function verificarPalindromo() {
        let t = document.getElementById('texto').value;
        let orig = t;
        
        
        t = t.toLowerCase();
        

        let limpio = "";
        for (let i = 0; i < t.length; i++) {
            let c = t[i];
            

            if (c === 'á') c = 'a';
            if (c === 'é') c = 'e';
            if (c === 'í') c = 'i';
            if (c === 'ó') c = 'o';
            if (c === 'ú') c = 'u';
            

            if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') || c === 'ñ') {
                limpio = limpio + c;
            }
        }
        

        let inv = "";
        for (let i = limpio.length - 1; i >= 0; i--) {
            inv = inv + limpio[i];
        }
        

        if (limpio !== "" && limpio === inv) {
            document.getElementById('resP').innerText = '"' + orig + '" SI es un palíndromo.';
        } else {
            document.getElementById('resP').innerText = '"' + orig + '" NO es un palíndromo.';
        }
    }

    function generarI() {
        let t = document.getElementById('nom').value;
        let res = "";


        if (t.length > 0 && t[0] !== ' ') {
            res = res + t[0].toUpperCase();
        }


        for (let i = 0; i < t.length - 1; i++) {
            if (t[i] === ' ' && t[i + 1] !== ' ') {
                res = res + t[i + 1].toUpperCase();
            }
        }


        if (res !== "") {
            document.getElementById('resM').innerText = res;
        } else {
            document.getElementById('resM').innerText = "Ingrese un texto válido.";
        }
    }


    function obtenerFecha() {
        let c = document.getElementById('ciudad').value;
        if (c === "") c = "La Paz";

        let f = new Date();
        let d = f.getDay();
        let m = f.getMonth();
        let a = f.getFullYear();

        let nd = "";
        switch (d) {
            case 0: nd = "Domingo"; break;
            case 1: nd = "Lunes"; break;
            case 2: nd = "Martes"; break;
            case 3: nd = "Miércoles"; break;
            case 4: nd = "Jueves"; break;
            case 5: nd = "Viernes"; break;
            case 6: nd = "Sábado"; break;
        }

        let nm = "";
        switch (m) {
            case 0: nm = "Enero"; break;
            case 1: nm = "Febrero"; break;
            case 2: nm = "Marzo"; break;
            case 3: nm = "Abril"; break;
            case 4: nm = "Mayo"; break;
            case 5: nm = "Junio"; break;
            case 6: nm = "Julio"; break;
            case 7: nm = "Agosto"; break;
            case 8: nm = "Septiembre"; break;
            case 9: nm = "Octubre"; break;
            case 10: nm = "Noviembre"; break;
            case 11: nm = "Diciembre"; break;
        }

        let r = c + ", " + nd + " " + f.getDate() + " de " + nm + " de " + a;
        document.getElementById('resF').innerText = r;
    }

    function verHora() {
        let f = new Date();
        let h = f.getHours();
        let m = f.getMinutes();
        let s = f.getSeconds();
        if (h < 10) h = "0" + h;
        if (m < 10) m = "0" + m;
        if (s < 10) s = "0" + s;

        let r = h + ":" + m + ":" + s;
        document.getElementById('resR').innerText = r;
    }

    setInterval(verHora, 1000);
    verHora(); 


    function generarPrimosTiempo() {
        let n = document.getElementById('np').value;
        let resP = document.getElementById('resP');
        let resT = document.getElementById('resT');

        if (n <= 0 || n === "") {
            resT.innerText = "0 ms";
            resP.innerText = "Ingrese un número válido.";
            return;
        }


        let t1 = new Date();
        let res = "";
        let c = 0;
        let num = 2;

        while (c < n) {
            let esP = true;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    esP = false;
                    break;
                }
            }

            if (esP) {
                if (c === 0) {
                    res = num;
                } else {
                    res = res + ", " + num;
                }
                c++;
            }
            num++;
        }


        
        let t2 = new Date();
        let ms = t2.getTime() - t1.getTime();

        // Mostrar resultados
        resT.innerText = ms + " milisegundos (" + (ms / 1000) + " segundos)";
        resP.innerText = res;
    }

  