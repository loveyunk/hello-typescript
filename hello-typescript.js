var BirdWhisperer = /** @class */ (function () {
    function BirdWhisperer(message) {
        this.chirping = message;
    }
    BirdWhisperer.prototype.chirp = function () {
        return 'Ah~ ok~' + this.chirping;
    };
    return BirdWhisperer;
}());
var birdWhisperer = new BirdWhisperer('coo-coo-coo....');
document.body.innerHTML = birdWhisperer.chirp();
//# sourceMappingURL=hello-typescript.js.map