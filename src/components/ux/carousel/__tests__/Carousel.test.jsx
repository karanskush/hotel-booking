import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Carousel } from '../';

describe('Carousel Component', () => {
  const mockImages = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  beforeEach(() => {
    // Mock image loading
    global.Image = class {
      constructor() {
        setTimeout(() => this.onload(), 0);
      }
    };
  });

  it('renders carousel with images', () => {
    render(<Carousel images={mockImages} />);
    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
  });

  it('navigates to next slide when next button is clicked', () => {
    render(<Carousel images={mockImages} />);
    const nextButton = screen.getByLabelText('Next slide');
    fireEvent.click(nextButton);
    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
  });

  it('navigates to previous slide when previous button is clicked', () => {
    render(<Carousel images={mockImages} />);
    const prevButton = screen.getByLabelText('Previous slide');
    fireEvent.click(prevButton);
    expect(screen.getByAltText('Slide 3')).toBeInTheDocument();
  });

  it('shows loading state initially', () => {
    render(<Carousel images={mockImages} />);
    expect(screen.getByRole('img')).toHaveClass('opacity-0');
  });

  it('auto-plays slides when autoPlay is true', () => {
    jest.useFakeTimers();
    render(<Carousel images={mockImages} autoPlay={true} interval={1000} />);
    
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('does not auto-play when autoPlay is false', () => {
    jest.useFakeTimers();
    render(<Carousel images={mockImages} autoPlay={false} />);
    
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
    jest.useRealTimers();
  });
}); 