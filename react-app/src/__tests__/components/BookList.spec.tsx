import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BookList } from '../../components/BookList';

describe('BookList', () => {
  const books = [
    {
      id: 'id_1',
      isbn: 'isbn_1',
      title: 'title_1',
      subtitle: 'subtitle_1',
      author: 'author_1',
      abstract: 'abstract_1',
      publisher: 'publisher_1',
      cover: 'cover_1',
      price: '$0.00',
      numPages: 1337,
    },
    {
      id: 'id_2',
      isbn: 'isbn_2',
      title: 'title_2',
      subtitle: 'subtitle_2',
      author: 'author_2',
      abstract: 'abstract_2',
      publisher: 'publisher_2',
      cover: 'cover_2',
      price: '$0.00',
      numPages: 1337,
    },
    {
      id: 'id_3',
      isbn: 'isbn_3',
      title: 'title_3',
      subtitle: 'subtitle_3',
      author: 'author_3',
      abstract: 'abstract_3',
      price: '$0.00',
      publisher: 'publisher_3',
      cover: 'cover_3',
      numPages: 1337,
    },
  ];

  it('should render a list of given books', () => {
    render(<BookList books={books} />, { wrapper: MemoryRouter });
    expect(screen.getByText('title_1')).toBeVisible();
    expect(screen.getByText('subtitle_2')).toBeVisible();
    expect(screen.getByText(/author_3/)).toBeVisible();
  });
});
