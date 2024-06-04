import { formatMoney } from './helpers';

describe('formatMoney', () => {
  it('should format the money correctly', () => {
    const amount = 12.99;
    const formattedAmount = formatMoney(amount);
    expect(formattedAmount).toBe('£12.99');
  });
});
