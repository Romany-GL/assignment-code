import { screen, render } from '@testing-library/react';
import ProductSpecifications, {
  ProductSpecificationsProps,
} from './ProductSpecifications';
import { ModelCode } from '../types';

const props: ProductSpecificationsProps = {
  brand: 'Philips',
  weight: 10,
  height: 10,
  width: 10,
  length: 10,
  modelCode: ModelCode.E27,
  color: 'Color',
};

describe('ProductSpecifications', () => {
  it('should render correctly', () => {
    render(<ProductSpecifications {...props} />);
    expect(screen.getByText(props.brand)).toBeInTheDocument();
    expect(screen.getByText(props.modelCode)).toBeInTheDocument();
    expect(screen.getByText(props.modelCode)).toBeInTheDocument();
    expect(screen.getByText('10 x 10 x 10')).toBeInTheDocument();
  });
});

describe('ProductSpecifications accessibility', () => {
  it("should have a table with a caption 'Specifications'", () => {
    render(<ProductSpecifications {...props} />);
    const specificationsTable = screen.getByRole('table');
    const tableCaption = screen.getByRole('caption', {
      name: /specifications/i,
    });
    expect(specificationsTable).toContainElement(tableCaption);
  });

  it('should have a table with a row header for each specification', () => {
    render(<ProductSpecifications {...props} />);
    const tableHeaders = screen.getAllByRole('rowheader');
    expect(tableHeaders).toHaveLength(5);
    tableHeaders.forEach((header) => {
      expect(header).toHaveAttribute('scope', 'row');
    });
  });
});
