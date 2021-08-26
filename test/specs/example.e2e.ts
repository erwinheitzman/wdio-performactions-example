describe('Control/Meta click', () => {
    it('should work as expected and select multiple table rows', async () => {
        await browser.url(`file:////${process.cwd()}/site/index.html`)

        await browser.performActions([
            {
                type: 'pointer',
                id: 'firstMouseActions',
                parameters: {pointerType: "mouse"},
                actions: [
                    {
                        type: 'pointerMove',
                        origin: await $('[data-id="1"]'),
                        x: 0,
                        y: 0,
                    },
                    {
                        type: 'pointerDown',
                        button: 0
                    }, {
                        type: 'pointerUp',
                        button: 0
                    }
                ]
            },
        ]);

        await browser.performActions([
            {
                type: 'key',
                id: 'firstKeyboardActions',
                actions: [
                    {
                        type: 'keyDown',
                        value: '\uE053'
                    },
                ]
            },
        ])

        await browser.performActions([
            {
                type: 'pointer',
                id: 'secondMouseActions',
                actions: [
                    {
                        type: 'pointerMove',
                        origin: await $('[data-id="2"]'),
                        x: 0,
                        y: 0,
                    },
                    {
                        type: 'pointerDown',
                        button: 0
                    }, {
                        type: 'pointerUp',
                        button: 0
                    }
                ]
            },
        ])

        await browser.performActions([
            {
                type: 'key',
                id: 'secondKeyboardActions',
                actions: [
                    {
                        type: 'keyUp',
                        value: '\uE053'
                    },
                ]
            },
        ])

        await browser.pause(2000)
    });
});


