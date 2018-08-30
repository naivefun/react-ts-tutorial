import * as React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import AppHeader from './AppHeader';
import { AppFooter } from './AppFooter';
import { Note } from './models/notes.model';

// State API
interface State {
  noteList: Note[];
  currentNote: Note;
  showForm: boolean;
}

class App extends React.Component<any, State> {
  tempTitle: string;
  tempContent: string;

  state: State = {
    noteList: [
      {
        id: 'a',
        title: 'aaaaaa',
        content: 'a',
        timestamp: Date.now()
      },
      {
        id: 'b',
        title: 'bbbbbb',
        content: 'b',
        timestamp: Date.now()
      }
    ],
    currentNote: null,
    showForm: false
  };

  componentDidMount() {
    if (!this.state.currentNote) {
      setTimeout(() => {
        this.setState({ currentNote: this.state.noteList[0] });
      }, 2000);
    }
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: 15 }}>
        <AppHeader
          title="印象笔记"
          onCreateNote={() =>
            this.setState({
              showForm: true
            })
          }
        />
        <hr />
        {this.state.showForm && (
          <div className="create-form">
            <input name="title" onChange={this.handleTitleChange} />
            <textarea name="content" onChange={this.handleContentChange} />
            <button
              onClick={() => {
                this.setState((preState) => ({
                  noteList: [
                    ...preState.noteList,
                    {
                      id: `${Date.now()}`,
                      title: this.tempTitle,
                      content: this.tempContent,
                      timestamp: Date.now()
                    }
                  ]
                }));
              }}
            >
              创建
            </button>
            <hr />
          </div>
        )}
        <div className="row">
          <div className="col-md-4">
            {this.state.noteList.map((note) => (
              <div
                key={note.id}
                className="note-item"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  this.setState({ currentNote: note });
                }}
              >
                <div className="title">{note.title}</div>
                <div className="timestamp">{note.timestamp}</div>
              </div>
            ))}
          </div>
          <div className="col-md-8">
            {this.state.currentNote ? (
              <>
                <h1>{this.state.currentNote.title}</h1>
                <div>{this.state.currentNote.content}</div>
                <div>{this.state.currentNote.timestamp}</div>
              </>
            ) : (
              <div>loading ...</div>
            )}
          </div>
        </div>
        <hr />
        <AppFooter />
      </div>
    );
  }

  handleTitleChange = (e: any) => {
    const value = e.nativeEvent.target.value;
    console.log('value', value);
    this.tempTitle = value;
  };

  handleContentChange = (e: any) => {
    const value = e.nativeEvent.target.value;
    console.log('content', value);
    this.tempContent = value;
  };
}

export default App;
