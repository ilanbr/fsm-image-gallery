import React, { Component } from 'react';
import './App.css';
import './_style.scss';
import {galleryMachine} from './fsm_imageGallery/imageGalleryMachine';

class App extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      gallery: 'start', // finite state
      query: '',
      items: []
    };
  }
  
  command(nextState, action) {
    switch (nextState) {
      case 'loading':
        // execute the search command
        this.search(action.query);
        break;
      case 'gallery':
        if (action.items) {
          // update the state with the found items
          return { items: action.items };
        }
        break;
      case 'photo':
        if (action.item) {
          // update the state with the selected photo item
          return { photo: action.item };
        }
        break;
      default:
        break;
    }
  }
  
  transition(action) {
    const currentGalleryState = this.state.gallery;
    const nextGalleryState =
      galleryMachine()[currentGalleryState][action.type];
    
    if (nextGalleryState) {
      const nextState = this.command(nextGalleryState, action);
      
      this.setState({
        gallery: nextGalleryState,
        ...nextState
      });
    }
  }
  

  search(query) {
    const encodedQuery = encodeURIComponent(query);
    setTimeout(() => {      
      fetch(
        `http://my-json-server.typicode.com/ilanbr/fake-gallery-data/images/?q=${encodedQuery}`, //for Production 'Build' i used this: http://my-json-server.typicode.com/ilanbr/fake-gallery-data/images/?q=${encodedQuery}
      { jsonpCallback: 'jsoncallback' })
      .then(res => res.json())
      .then(data => {
        this.transition({ type: 'SEARCH_SUCCESS', items: data });
        console.log(data);
      })
      .catch(error => {
        this.transition({ type: 'SEARCH_FAILURE' });
      });
    }, 1000);
  }

  handleSubmit(e) {
    e.persist();
    e.preventDefault();
    
    this.transition({ type: 'SEARCH', query: this.state.query });
  }

  handleChangeQuery(value) {
    this.setState({ query: value });
  }

  renderForm(state) {
    const searchText = {
      loading: 'Searching...',
      error: 'Try search again',
      start: 'Search'
    }[state] || 'Search';
    
    return (
      <div className="ui-form-wrapper">
        <h2>FITNESS STARTS HERE</h2>
        <p>Get fit right away with searching your favorite activities.</p>
        <form className="ui-form" onSubmit={e => this.handleSubmit(e)}>
          <input
            type="search"
            className="ui-input"
            value={this.state.query}
            onChange={e => this.handleChangeQuery(e.target.value)}
            placeholder="search: run, weights, gym..."
            disabled={state === 'loading'}
          />
          <div className="ui-buttons">
            <button
              className="ui-button"
              disabled={state === 'loading'}>
                {searchText}
            </button>
            {state === 'loading' &&
              <button
                className="ui-button"
                type="button"
                onClick={() => this.transition({ type: 'CANCEL_SEARCH' })}>
                Cancel
              </button>
            }
          </div>
        </form>
      </div>
    );
  }
  
  renderGallery(state) {
    return (
      <section className="ui-items" data-state={state}>
        {state === 'error'
          ? <span className="ui-error">Uh oh, search failed.</span>
          : this.state.items.map((item, i) =>
            <img
              src={item.thumbnailUrl}
              className="ui-item"
              style={{'--i': i}}
              key={item.thumbnailUrl}
              onClick={() => this.transition({
                type: 'SELECT_PHOTO', item
              })}
            />
          )
        }
      </section>
    );
  }

  renderPhoto(state) {
    if (state !== 'photo') return;
    
    return (
      <section
        className="ui-photo-detail"
        onClick={() => this.transition({ type: 'EXIT_PHOTO' })}>
        <img src={this.state.photo.thumbnailUrl} className="ui-photo"/>
      </section>
    )
  }

  
  render() {
    const galleryState = this.state.gallery;
    
    return (
      <div className="ui-app" data-state={galleryState}>
        {this.renderForm(galleryState)}
        {this.renderGallery(galleryState)}
        {this.renderPhoto(galleryState)}  
      </div>
    );
  }
}

export default App;
