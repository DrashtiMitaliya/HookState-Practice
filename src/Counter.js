import {useHookstate } from '@hookstate/core';
import  {counterHookState} from'./hookState';

function Counter() {
   
    const counterValue = useHookstate(counterHookState)

  
  return (
    <div>
      <h1>Counter: {counterValue.get()}</h1>
      <button onClick={()=>counterValue.set(p=>p+1)}> + </button>
      <button  onClick={()=>counterValue.set(p=>p-1)}>-</button>
    </div>
  );
}
export default Counter