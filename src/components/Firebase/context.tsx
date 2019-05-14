import React from 'react';



export const withFirebase = (Component:any) => (props:any) => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} Firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export const FirebaseContext = React.createContext({});
export default FirebaseContext;