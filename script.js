var redSlider = document.getElementById("redSlider");
        var greenSlider = document.getElementById("greenSlider");
        var blueSlider = document.getElementById("blueSlider");
        var body = document.getElementById("main");
        var colorBox = document.getElementById("colorBox");

        var redValue, blueValue , greenValue;
        var redHex, greenHex, blueHex;
        var hexValue;


        redSlider.oninput = function() {
            redValue = this.value;
            convertToHex(redValue, greenValue, blueValue);
        }

        greenSlider.oninput = function() {
            greenValue = this.value;
            convertToHex(redValue, greenValue, blueValue);
        }

        blueSlider.oninput = function() {
            blueValue = this.value;
            convertToHex(redValue, greenValue, blueValue);
        }

        function convertToHex(redDecimal, greenDecimal, blueDecimal) {
            redHex = Number(redDecimal).toString(16);
            greenHex = Number(greenDecimal).toString(16);
            blueHex = Number(blueDecimal).toString(16);
            if (redHex.length == 1) {
                redHex = "0" + redHex;
            }

            if (greenHex.length == 1) {
                greenHex = "0" + greenHex;
            }

            if (blueHex.length == 1) {
                blueHex = "0" + blueHex;
            }

            hexValue = "#" + redHex + greenHex + blueHex;
            hexValue = hexValue.toUpperCase();
            document.getElementById("hexColor").innerHTML = hexValue;
            colorBox.style.backgroundColor = hexValue;
        }

        function randomColor() {
            redValue = Math.floor(Math.random() * 256);
            greenValue = Math.floor(Math.random() * 256);
            blueValue = Math.floor(Math.random() * 256);

            redSlider.value = redValue;
            greenSlider.value = greenValue;
            blueSlider.value = blueValue;

            convertToHex(redValue, greenValue, blueValue);
        }

        function printDecimalValues() {
            console.log("Red: " + redValue + "\nGreen: " + greenValue + "\nBlue: " + blueValue + "\n\n")
        }