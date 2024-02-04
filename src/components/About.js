import React from "react";

function About({bio}) {
 let myBio;
  if(bio!==""){
    myBio=bio    
  }
  else{
    myBio=""
  }
  function Links({url}){
    return(
      <div>
       <h3>Links</h3>
       <a href={url.github}/>
       <a href={url.linkedin}/>
      </div>
    )
  }
  return (
    <div id="about">
      <h2>About Me</h2>
     <p>{myBio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links/>
    </div>
  );
}

export default About;
