class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.low = min;
        this.high = max;
    }

    guess() {
        return this.middle = Math.round((this.high + this.low) / 2);
    }

    lower() {
        return this.high = this.middle;
    }

    greater() {
        return this.low = this.middle;
    }
}

module.exports = GuessingGame;
