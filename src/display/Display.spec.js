import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test("it should default to 'unlocked' and 'open'", () => {
    const { getByText } = render(<Display />);
    expect(getByText(/unlocked/i));
    expect(getByText(/open/i));
});

test("Displays 'Closed' if the closed prop is true", () => {
    const { getByText } = render(<Display closed={true} />);
    expect(getByText(/closed/i))
  });
  
test("Displays 'Open' if the closed prop is false", () => {
    const { getByText } = render(<Display closed={false} />);
    expect(getByText(/open/i))
  });
  
test("Displays 'Locked' if the locked prop is true", () => {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText('Locked'))
  });
  
test("Displays 'Unlocked' if the locked prop is false", () => {
    const { getByText } = render(<Display locked={false} />);
    expect(getByText('Unlocked'))
  });

test("when gate is locked or closed use the red-led class", () => {
    const mockState = {
        locked: true,
        closed: true
    }
    const { getByText } = render(<Display locked={mockState.locked} closed={mockState.closed} />)
    const gateLocked = getByText(/locked/i);
    expect(gateLocked.classList.contains('red-led')).toBe(true);
    const gateClosed = getByText(/closed/i);
    expect(gateClosed.classList.contains('red-led')).toBe(true); 
});

test("when gate is unlocked or open use the green-led class", () => {
    const mockState = {
        locked: false,
        closed: false
    }
    const { getByText } = render(<Display locked={mockState.locked} closed={mockState.closed} />)
    const gateUnlocked = getByText(/unlocked/i);
    expect(gateUnlocked.classList.contains('green-led')).toBe(true);
    const gateOpen = getByText(/open/i);
    expect(gateOpen.classList.contains('green-led')).toBe(true);
})