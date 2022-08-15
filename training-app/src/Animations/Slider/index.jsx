import React, {useRef} from 'react';
import './style.css'

const Slider = () => {
    const slider = useRef(null)
    const thumb = useRef(null)

    const mouseDown = (event) => {
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        let shiftX = event.clientX - thumb.current.getBoundingClientRect().left;
        // shiftY здесь не нужен, слайдер двигается только по горизонтали

        slider.current.addEventListener('mousemove', onMouseMove);
        slider.current.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - slider.current.getBoundingClientRect().left;

            // курсор вышел из слайдера => оставить бегунок в его границах.
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = slider.current.offsetWidth - thumb.current.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            thumb.current.style.left = newLeft + 'px';
        }

        function onMouseUp() {
            slider.current.removeEventListener('mouseup', onMouseUp);
            slider.current.removeEventListener('mousemove', onMouseMove);
        }

    }

    return (
        <div id="slider" className="slider" ref={slider}>
            <div className="thumb" ref={thumb} onDragStart={() => false} onMouseDown={mouseDown}/>
        </div>
    );
};

export default Slider;