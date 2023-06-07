import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { Loader } from './Loader/Loader';
import {getSearch} from 'services/getSearch';
import { ErrorMessage, Photo, Wrapper } from './App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    total: 1,
    loading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
    alt: '',
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.getImages(search, page);
    }
  }

  getImages = (search, page) => {
    this.setState({ loading: true });

    getSearch(search, page)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
        const { hits, total } = data;

        if (hits.length === 0) {
          this.setState({ images: [], total });
          Notify.failure('No images found.');
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            total,
          }));
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = (largeImageURL, alt) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL,
      alt,
    }));
  };

  handleSearchSubmit = search => {
    this.setState({
      search,
      images: [],
      page: 1,
      total: 1,
      loading: false,
      error: null,
    });
  };

  handleCloseModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  render() {
    const {
      error,
      loading,
      images,
      total,
      page,
      showModal,
      largeImageURL,
      alt,
    } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {error && <ErrorMessage>Something went wrong: ({error})!</ErrorMessage>}
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && total / 12 > page && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal onCloseModal={this.handleCloseModal}>
            <Photo src={largeImageURL} alt={alt} />
          </Modal>
        )}
      </Wrapper>
    );
  }
}

export default App;
