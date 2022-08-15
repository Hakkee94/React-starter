import React, {useRef} from 'react';
import './style.css'

function animate({timing, draw, duration}) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timeFraction);
        draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }})}

function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
}

const BallBounce = () => {

    const field = useRef(null)
    const ball = useRef(null)

    return (
            <div id="field" ref={field}>
                <img ref={ball} onClick={() => {
                    let to = field.current.clientHeight - ball.current.clientHeight;

                    animate({
                        duration: 2000,
                        timing: makeEaseOut(bounce),
                        draw(progress) {
                            ball.current.style.top = to * progress + 'px'
                        }
                    });

                    animate({
                        duration: 2000,
                        timing: makeEaseOut(quad),
                        draw(progress) {
                            ball.current.style.left = to * progress + 'px'
                        }
                    });
                }} src="https://js.cx/clipart/ball.svg" width="40" height="40" id="ball"/>
            </div>
    );
};

export default BallBounce;