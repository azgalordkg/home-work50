$(function () {
    class Machine {
        constructor() {
            this.turnedOn = false;
        }
            turnOn() {
                this.turnedOn = true;
                console.log('Вы включили устройство.');
            };
            turnOff() {
                this.turnedOn = false;
                console.log('Устройство отключено.');
            };
    }

    class HomeAppliance extends Machine {
        constructor() {
            super();
            this.pluggedOn = false;
        }
            plugIn() {
                this.pluggedOn = true;
                console.log('Вы подключили устройство в сеть.')
            };
            plugOff() {
                this.pluggedOn = false;
                console.log('Устройство отключено от сети.')
            }
    }

    class WashingMachine extends HomeAppliance {
        constructor() {
            super();
        }
            turnOn() {
                if (this.pluggedOn === false) {
                    console.log('Устройство не включено в розетку.');
                } else {
                    this.turnedOn = true;
                    console.log('Устройство подключено!');
                }
            };

            run() {
                console.log('Запуск произведен.');
            }
        }

    class LightSource extends HomeAppliance {
        constructor() {
            super();
        }

        turnOn() {
            if (this.pluggedOn === false) {
                console.log('Устройство не включено в розетку.');
            } else {
                this.turnedOn = true;
                console.log('Устройство подключено!');
            }
        };

        setLevel(level) {
            this.level = level;
            if (level >= 1 && level <= 100) {
                console.log('Установлен уровень освещенности: ' + level);
            } else {
                console.log('Установлен не допустимый уровень мощности.');
            }
        };
    }

    class AutoVehicle extends Machine {
        constructor() {
            super();
            this.x = 0;
            this.y = 0;
        }

            setPosition(x, y) {
                this.x = x;
                this.y = y;
                console.log('Текущие координаты - x = ' + this.x + ', y = ' + this.y);
            };
    }

    class Car extends AutoVehicle {
        constructor() {
            super();
            this.speed = 10;
        }
            setSpeed(speed) {
                this.speed = speed;
                console.log('Установлена скорость: ' + this.speed);
            };

            run(x, y) {
                let thisX = x;
                let thisY = y;
                let currentSpeed = this.speed;
                if (this.turnedOn === true) {
                    let interval = setInterval(() => {
                        this.x += currentSpeed;
                        this.y += currentSpeed;
                        if (this.x > x) {
                            this.x = thisX;
                        }
                        if (this.y > y) {
                            this.y = thisY;
                        }
                        this.setPosition(this.x, this.y);
                        if ((this.x === x) && (this.y === y)) {
                            clearInterval(interval);
                        }
                    },1000);
                }
            }
    }


    const a = '    ';

    const bosch = new WashingMachine();
    bosch.plugIn();
    bosch.turnOn();
    bosch.run();
    console.log(a);

    const lightBulb = new LightSource();
    lightBulb.plugIn();
    lightBulb.setLevel(60);
    lightBulb.turnOn();
    console.log(a);

    const honda = new Car();
    honda.setPosition(30, 40);
    honda.turnOn();
    honda.setSpeed(60);
    honda.run(180, 240);
    console.log(a);
});