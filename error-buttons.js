document.addEventListener("DOMContentLoaded", (event) => {
    let button_list = document.querySelectorAll('button');

    let logButton = button_list[1];
    logButton.addEventListener('click', () => {
        console.log('this is logButton');
    });

    let consoleError = button_list[2];
    consoleError.addEventListener('click', () => {
        console.error('this is Error Button');
    });

    let countButton = button_list[3];
    countButton.addEventListener('click', () => {
        console.count('this is countButton');
    });

    let warnButton = button_list[4];
    warnButton.addEventListener('click', () => {
        console.warn('this is warnButton');
    });

    let assertButton = button_list[5];
    assertButton.addEventListener('click', () => {
        let funnyExpression = "9 + 10"
        console.assert(eval(funnyExpression) == 21, `${funnyExpression} does not equal 21`);
    });

    let clearButton = button_list[6];
    clearButton.addEventListener('click', () => {
        console.clear();
    });

    let dirButton = button_list[7];
    dirButton.addEventListener('click', () => {
        console.dir(document.head);
    });

    let dirxmlButton = button_list[8];
    dirxmlButton.addEventListener('click', () => {
        console.dirxml(document.head);
    });

    let groupStartButton = button_list[9];
    groupStartButton.addEventListener('click', () => {
        console.group('Start Group');
        console.log('Group Start Button clicked');
    });

    let groupEndButton = button_list[10];
    groupEndButton.addEventListener('click', () => {
        console.groupEnd();
        console.log('Group End Button clicked');
    });

    let tableButton = button_list[11];
    tableButton.addEventListener('click', () => {
        console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
    });

    let startTimerButton = button_list[12];
    startTimerButton.addEventListener('click', () => {
        console.time('Timer');
        console.log('Timer Start');
    });

    let endTimerButton = button_list[13];
    endTimerButton.addEventListener('click', () => {
        console.timeEnd('Timer');
        console.log('Timer End');
    });

    let traceButton = button_list[14];
    traceButton.addEventListener('click', () => {
        let fortnite = () => {is()};
        let is = () => {fun()};
        let fun = () => {console.trace();};

        fortnite();
    });

    let triggerErrorButton = button_list[15];
    triggerErrorButton.addEventListener('click', () => {
        throw new Error('TrackJS better track my errors >:(');
    });

});