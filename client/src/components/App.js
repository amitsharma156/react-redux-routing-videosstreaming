import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';


const App = ()=>{
    return (
        <div className = "ui container">
            
            
            <BrowserRouter>
            <Header />
                <div>
                   <Route exact path ='/' component={StreamList}/>
                   <Route exact path ='/streams/new' component={StreamCreate}/>
                   <Route exact path ='/streams/edit' component={StreamEdit}/>
                   <Route exact path ='/streams/delete' component={StreamDelete}/>
                   <Route exact path ='/streams/show' component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
        )
}
export default App;