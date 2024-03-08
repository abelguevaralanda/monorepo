import {describe, expect, test} from "vitest";
import App from "./App.tsx";
import {fireEvent, render} from "@testing-library/react";

describe('App', () => {
  describe('WHEN the button is clicked three times', () => {
    test('should increment the count by 3', () => {
      const { getByText } = render(<App />);
      const button = getByText('count is 0');
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      expect(button.textContent).equal('count is 3');

    })
 })
})
