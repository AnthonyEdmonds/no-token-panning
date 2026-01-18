Hooks.on('libWrapper.Ready', function () {
    libWrapper.register(
        'no-token-panning',
        'foundry.canvas.placeables.Token.prototype._onUpdate',
        function (wrapped, changed, options, userId) {
            options.pan = false;
            return wrapped(changed, options, userId);
        },
        'WRAPPER',
    );
});
