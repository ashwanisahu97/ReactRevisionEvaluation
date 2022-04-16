import React from 'react'

function City() {
  return (
      <div>
          <h1>Add city Information here</h1>
          <form action="" onSubmit={ ()=>handleSubmit}>
              <input type="text" placeholder="enter city name" onChange={()=>e.target.value } />
              <input type="text" placeholder="enter Population" onChange={ ()=>e.target.value}/>
              <input type="text" placeholder="enter country Name" onChange={ ()=>e.target.value}/>
          <button type="submit">Submit</button>
          </form>
    </div>
  )
}

export default City