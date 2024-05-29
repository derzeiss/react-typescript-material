import { fireEvent, render, screen } from '@testing-library/react';
import { Hideable } from '../../components/Hideable';

describe('hideable', () => {
  it('should not render the content by default', () => {
    render(<Hideable>content_</Hideable>);
    expect(screen.queryByText('content_')).not.toBeInTheDocument();
  });

  it('should show the content when clicking the show button', () => {
    render(<Hideable>content_</Hideable>);
    fireEvent.click(screen.getByText('+ show details'));
    expect(screen.getByText('content_')).toBeVisible();
  });

  it('should change the text on the show button to hide once it was clicked', () => {
    render(<Hideable>content_</Hideable>);
    fireEvent.click(screen.getByText('+ show details'));
    expect(screen.getByText('- hide details')).toBeVisible();
  });

  it('should hide the content when clicking the show button twice', () => {
    render(<Hideable>content_</Hideable>);
    fireEvent.click(screen.getByText('+ show details'));
    fireEvent.click(screen.getByText('- hide details'));
    expect(screen.queryByText('content_')).not.toBeInTheDocument();
  });
});
