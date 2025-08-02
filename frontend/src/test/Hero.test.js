import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";


// checking hero component 
describe('Hero Component', () => {
    // test 1
    test('render hero image', () => {
        render(<Hero />);

        const heroImage = screen.getByAltText("homeherologo");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

    // test 2
    test('render signup image', () => {
        render(<Hero />);

        const signupbutton = screen.getByRole("button");
        expect(signupbutton).toBeInTheDocument(); 
        expect(signupbutton).toHaveClass("hover-black");
        expect(signupbutton).toHaveStyle({ backgroundColor: "#387ed1" });
    });
});
