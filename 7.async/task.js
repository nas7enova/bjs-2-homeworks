class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	getCurrentFormattedTime() {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, "0");
		const minutes = now.getMinutes().toString().padStart(2, "0");
		return `${hours}:${minutes}`;
	}

	isValidTime(time) {
		const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
		return timeRegex.test(time);
	}

	addClock(time, callback) {
		if (arguments.length < 2) {
			throw new Error("Отсутствуют обязательные аргументы");
		}

		if (typeof time !== "string") {
			throw new Error("Параметр time должен быть строкой в формате HH:MM");
		}

		if (!this.isValidTime(time)) {
			throw new Error(`Неверный формат времени: "${time}". Используйте HH:MM (например, "09:30")`);
		}

		if (typeof callback !== "function") {
			throw new Error("callback должен быть функцией");
		}

		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn("Уже присутствует звонок на это же время");
		}

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		});
	}

	removeClock(timeToRemove) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== timeToRemove);
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(alarm => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);
	}

	stop() {
		if (this.intervalId !== null) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}
	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}