import React from 'react';
import './index.css';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AppContext from '../../context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class Root extends React.Component {
  state = {
    twitter: [],
    article: [],
    note: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Routes>
            <Route path="/" element={<TwittersView />} />
            <Route path="/articles" element={<ArticlesView />} />
            <Route path="/notes" element={<NotesView />} />
            <Route path="/notes/:id" element={<NotesView />} />
          </Routes>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
