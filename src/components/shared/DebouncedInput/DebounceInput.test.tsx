import { screen, render, fireEvent, act } from '@testing-library/react';
import { DebouncedInput } from './DebouncedInput';

describe('DebouncedInput', () => {
  jest.useFakeTimers(); // Mock timers
  const debounceTime = 500;
  const onChangeMock = jest.fn();
  const initialValue = '';

  it('load input element without debounced value', () => {
    render(<DebouncedInput value={initialValue} onChange={onChangeMock} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
  });

  it('load input element with debounced value', () => {
    render(<DebouncedInput value={initialValue} onChange={onChangeMock} debounce={debounceTime} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
  });

  it('should update internal state and trigger onChange with value', () => {
    const newValue = 'test';

    render(<DebouncedInput value={initialValue} onChange={onChangeMock} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
    // Simulate user typing
    fireEvent.change(inputElement, { target: { value: newValue } });

    // Should update internal state immediately
    expect(inputElement).toHaveValue(newValue);

    // Should not trigger onChange immediately
    expect(onChangeMock).not.toHaveBeenCalled();

    // Fast-forward time by debounceTime
    act(() => {
      jest.advanceTimersByTime(debounceTime);
    });

    // Should trigger onChange with debounced value after debounceTime
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(newValue);
  });
});
