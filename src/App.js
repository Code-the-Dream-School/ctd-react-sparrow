import * as React from 'react';



const list = [
  {
    title: 'Read the book',
    url:'https://courses.robinwieruch.de/p/the-road-to-learn-react',
    link: '"The Road to React"',
    id: 1,
  },
  {
    title: 'Watch the tutorials',
    url:'https://www.educative.io/',
    link: '"React"',
    id: 2, 
  },
  {
    title: 'Complete assignment for this week',
    url:'https://github.com/Code-the-Dream-School/ctd-react-sparrow/wiki',
    link: '"Sparrow assignments"',
    id: 3, 
  },
  {
    title: 'Sign up for Mentor Sessions',
    url:' https://docs.google.com/spreadsheets/d/1hbeVKsUxDUmPgD0cVZEL0xrkwdo-FBjtC1HEAPLz2bE/edit#gid=0//learn.codethedream.org/react-fundamentals-project-setup-and-react-basics/',
    link: '"Sin Up Sheet"',
    id: 4, 
  },
  {
    title: 'Submit the assignment',
    url:'https://github.com/dseydahmetova',
    link: '"Github"',
    id: 5, 
  }

];


function App() {

  return (
    <div>
    <h1>To do List for CTD</h1>
   
    {/* render the list */}

    <ul>
      {list.map(function(item) {
       return (
        <li key={item.id}>
          <p>{item.title}</p>
          <p> 
            <a href={item.url}> {item.link}</a> 
          </p>
        </li>
      );
      })}
    </ul>
    
    </div>
  );
}

export default App;
