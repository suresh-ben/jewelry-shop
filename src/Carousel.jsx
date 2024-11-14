import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Carousel = ({
    data = [],
    heightClass='h-[10rem]',
    intervalInMs=2500
    }) => {

    /**
     * Index of the item visible
     * @type {[number, (val: number | Function) => void]}
     */
    const [currentItemInd, setCurrentItemInd] = useState(0);

    const handleRight = () => {
        if(data.length == 1 || data.length == 0) return;
        
        setCurrentItemInd(prev => {
            if(prev > 0) return prev - 1;
            else return 0;
        })
    }

    const [direction, setDirection] = useState(1) //+1 => right, -1 => left
    useEffect(() => {
        if(data.length == 1 || data.length == 0) return;

        if(direction > 0 && currentItemInd == data.length - 1) setDirection(-1);
        else if(direction  < 0 && currentItemInd == 0) setDirection(1);
    }, [currentItemInd, direction])

    const handleLeft = () => {
        if(data.length == 1 || data.length == 0) return;

        setCurrentItemInd(prev => {
            if(prev < data.length  - 1) return prev + 1;
            else {
                return data.length  - 1;
            };
        })
    }

    //Logic to make items scroll continously
    const [intervalId, setIntervalId] = useState(null);
    useEffect(() => {
        if(data.length == 1 || data.length == 0) return;

        if(intervalId) clearInterval(intervalId); // Clear the existing interval before creating new one
        const initialInterval = setInterval(() => {
            if(direction > 0)
                handleLeft();
            else if(direction < 0)
                handleRight();
        }, intervalInMs);
        setIntervalId(initialInterval);

        return () => clearInterval(initialInterval);
    //eslint-disable-next-line
    }, [direction])

    const resetInterval = () => {
        clearInterval(intervalId); // Clear the existing interval
        const newInterval = setInterval(() => {
            if(direction > 0)
                handleLeft();
            else if(direction < 0)
                handleRight();
        }, intervalInMs); // Set a new interval
        setIntervalId(newInterval);
    };

    //

    /**
     * Point at which the scrolling started
     */
    const [moveStart, setMoveStart] = useState(0);
    const handleMoveStart = (e) => {
        resetInterval();
        setMoveStart(e?.clientX || e?.nativeEvent.touches[0].clientX);
    }

    const handleMoveEnd = (e) => {
        resetInterval();

        const currentMoveAt = e?.clientX || e?.nativeEvent?.changedTouches[0]?.clientX;
        if(currentMoveAt < moveStart) handleLeft()
        else if (currentMoveAt > moveStart) handleRight()
    }

    return (
        <div className={`${heightClass} relative`}>
            <div className={`${data.length > 1? 'h-[100%]' : 'h-full'} w-full relative overflow-x-hidden`}>
                <motion.div 
                    animate={{
                        left:  `-${currentItemInd * 100}%`
                    }}
                    style={{userSelect: 'none'}}
                    className='absolute h-full w-full flex'
                    onTouchStart={handleMoveStart}
                    onTouchEnd={handleMoveEnd}
                    onMouseDown={handleMoveStart}
                    onMouseUp={handleMoveEnd}
                >
                    {
                        data && data.length > 0 && data.map((item, ind) => {
                            return <div 
                                key={ind}
                                className='flex-none w-full flex-shrink-0 p-2'
                            >
                                {item}
                            </div>
                        })
                    }
                </motion.div>
            </div>

            <div className={`absolute h-full w-full z-10 top-0 left-0 flex justify-between items-center p-8`}>
                <button 
                    onClick={() => {
                        resetInterval(); 
                        setCurrentItemInd(Math.max(currentItemInd - 1, 0));
                    }}
                    className='h-[3rem] w-[3rem] rounded-full bg-white flex justify-center items-center'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button 
                    onClick={() => {
                        resetInterval(); 
                        setCurrentItemInd(Math.min(currentItemInd + 1, data.length - 1));

                    }}
                    className='h-[3rem] w-[3rem] rounded-full bg-white flex justify-center items-center'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            {
                data.length > 1 && <div className='absolute bottom-0 w-full h-[10%] flex justify-center items-center'>
                    {data.map((_, ind) => {
                        return <div 
                            onClick={() => {
                                resetInterval(); 
                                setCurrentItemInd(ind);
                            }}
                            key={ind}
                            className={`${currentItemInd === ind ? 'bg-[#FFFDD0]' : 'bg-white'} ${currentItemInd === ind ? 'h-[4px]' : 'h-[3px]'} w-[3rem] mx-1 rounded-full`}
                        />
                    })}
            </div>
            }
        </div>
    );
}

export default Carousel;
