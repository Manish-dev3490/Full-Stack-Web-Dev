// This is the main compnent
function Main() {
    return (
        <>
            <h2>Background Color Changer</h2>
            <div className='main-section'>
                <button style={{backgroundColor:"red"}} className='btn'>Red</button>
                <button style={{backgroundColor:"blue"}} className='btn'>Blue</button>
                <button style={{backgroundColor:"green"}} className='btn'>Green</button>
                <button style={{backgroundColor:"yellow"}} className='btn'>Yellow</button>
                <button style={{backgroundColor:"orange"}} className='btn'>Orange</button>
            </div>
        </>
    )
}

export default Main