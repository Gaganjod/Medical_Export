import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../Hero';
import { describe, it, expect } from 'vitest';

describe('Hero Component', () => {
    it('renders the main heading', () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
        expect(screen.getByText(/Medical Emergency/i)).toBeInTheDocument();
        expect(screen.getByText(/Response System/i)).toBeInTheDocument();
    });

    it('renders the emergency call button', () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
        const callButton = screen.getByText(/Call Emergency: 108/i);
        expect(callButton).toBeInTheDocument();
        expect(callButton.closest('a')).toHaveAttribute('href', '/emergency');
    });

    it('renders the first aid guide link', () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
        const guideLink = screen.getByText(/First Aid Guide/i);
        expect(guideLink).toBeInTheDocument();
    });
});
