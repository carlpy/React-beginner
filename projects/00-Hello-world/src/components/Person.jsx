import React from 'react';

function Person({name, age, company}) {
  return (
    <>
      <h2>hello {name}</h2>
      <p>you're {age} and you work at {company}</p>
    </>
  )
}

export default Person;