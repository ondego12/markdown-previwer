import logo from './logo.svg';
import { useState } from 'react';
import {  marked } from 'marked';
import './App.css';
import { icons } from 'react-icons';
import { FaExpandArrowsAlt } from 'react-icons/fa'

function App() {


 // header (H1 size), 
  //a sub header (H2 size), 
  //a link, 
  //inline code, 
  //a code block, 
  //a list item, 
  //a blockquote, 
  //an image, 
  //and bolded text

  const[text, setText] = useState(`
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
  [title](https://www.example.com)


  Heres some code,\`code\`between 2 backticks

 \`\`\`
 // this is multi-line code:

 function anotherExample(firstLine, lastLine) {
   if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
     return multiLineCode;
   }
 }
\`\`\`

You can also make text **bold**... whoa!

or *italic*

And feel free to go crazy ~~c😍😍~~

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

![ondegoDev Logo](https://ondegoDev.com)


  `)

  marked.setOptions({
    breaks:true
  })
  

  const textHandler=(event)=>{

    event.preventDefault()
    setText(event.target.value)


  }


  


 
  return (

    
    <div className="App">

      <div className='area'>
      <div className='head'>
        <h2>OndegoDev</h2>

        <icon><FaExpandArrowsAlt/></icon>
        
        </div>
      <textarea cols="84" rows="20" value={text} id='editor' onChange={textHandler}>
      </textarea>
      </div>
     
      <main>
      <div className='head'><h2>OndegoDev</h2></div>
      <div id='preview' dangerouslySetInnerHTML={{__html:marked(text),}}></div>
      </main>
    
     
    </div>
  );
}

export default App;
