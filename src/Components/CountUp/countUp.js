import React, { memo } from 'react'
import CountUp , { useCountUp }from 'react-countup'
import styles from './countUp.module.css'

const CountUpComp = memo((props)=> {
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        start: 0,
        end: 1234567,
        delay: 5,
        duration: 5,
        startOnMount: true,
        prefix:'$',
        suffix:'won'
      });
    return (
        <div className={styles.CountUp}>
        <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
            <CountUp end={1000} prefix='$' suffix='won'duration={10} startOnMount={false}>
        {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}
  </CountUp>
        </div>
    )
})

CountUp.propTypes = {

}

export default CountUpComp
