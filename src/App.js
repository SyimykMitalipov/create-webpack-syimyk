import React, { useState } from 'react'
const App = () => {
    const [state, setState] = useState(0)
    return (
        <div>
            <span>{state}</span>
            <button onClick={() => setState(prev => prev += 1)}>Increment</button>
        </div>
    )
}

export default App