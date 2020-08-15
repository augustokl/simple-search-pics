import React from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('search/photos', {
      params: {
        query: term
      },
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div class="ui label">
          <i class="image icon"></i> {this.state.images.length}
        </div>
      </div>
    );
  }
}

export default App;
